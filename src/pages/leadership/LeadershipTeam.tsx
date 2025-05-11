import React, { useRef, useEffect } from "react";
import * as go from "gojs";

const nodeDataArray: Array<go.ObjectData> = [
  { key: 1, name: "Stella Payne Diaz", title: "CEO", dept: "Management", pic: "1.jpg", email: "sdiaz@example.com", phone: "(234) 555-6789" },
  { key: 2, name: "Luke Warm", title: "VP Marketing/Sales", dept: "Management", pic: "2.jpg", email: "lwarm@example.com", phone: "(234) 555-6789", parent: 1 },
  { key: 3, name: "Meg Meehan Hoffa", title: "Sales", dept: "Sales", pic: "3.jpg", email: "mhoffa@example.com", phone: "(234) 555-6789", parent: 2 },
  { key: 4, name: "Peggy Flaming", title: "VP Engineering", dept: "Management", pic: "4.jpg", email: "pflaming@example.com", phone: "(234) 555-6789", parent: 1 },
  { key: 5, name: "Saul Wellingood", title: "Manufacturing", dept: "Production", pic: "5.jpg", email: "swellingood@example.com", phone: "(234) 555-6789", parent: 4 },
];

const LeadershipTeam: React.FC = () => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, diagramRef.current!, {
      allowCopy: false,
      allowDelete: false,
      initialAutoScale: go.Diagram.UniformToFill,
      maxSelectionCount: 1,
      validCycle: go.CycleMode.DestinationTree,
      layout: $(go.TreeLayout, {
        treeStyle: go.TreeLayout.StyleLastParents,
        arrangement: go.TreeLayout.ArrangementHorizontal,
        angle: 90,
        layerSpacing: 35,
        alternateAngle: 90,
        alternateLayerSpacing: 35,
        alternateAlignment: go.TreeLayout.AlignmentBus,
        alternateNodeSpacing: 20
      }),
      "undoManager.isEnabled": true
    });

    // Node template (modern, editable, with photo, name, title, dept)
    diagram.nodeTemplate = $(
      go.Node, "Spot",
      { isShadowed: true, shadowOffset: new go.Point(0, 2), selectionObjectName: "BODY" },
      $(
        go.Panel, "Auto", { name: "BODY" },
        $(go.Shape, "RoundedRectangle", {
          name: "SHAPE",
          fill: "#0C7C92",
          strokeWidth: 0,
          portId: "",
          spot1: go.Spot.TopLeft,
          spot2: go.Spot.BottomRight
        }),
        $(
          go.Panel, "Table", { margin: 0.5 },
          $(
            go.Panel, "Table", { padding: new go.Margin(18, 18, 18, 24) },
            $(go.Panel, "Table", {
              column: 0,
              alignment: go.Spot.Left,
              stretch: go.Stretch.Vertical,
              defaultAlignment: go.Spot.Left
            },
              $(go.Panel, "Horizontal", { row: 0 },
                $(go.TextBlock, {
                  editable: true,
                  minSize: new go.Size(10, 14),
                  font: "600 1.1rem Tagesschrift, Inter, system-ui, sans-serif",
                  stroke: "#16284F"
                })
                  .bindTwoWay("text", "name"),
                $(go.Panel, "Auto", { margin: new go.Margin(0, 0, 0, 10) },
                  $(go.Shape, "Capsule", { parameter1: 6, parameter2: 6, fill: "#f4f4f4", stroke: "#6EC9C4" }),
                  $(go.TextBlock, {
                    editable: true,
                    minSize: new go.Size(10, 12),
                    margin: new go.Margin(2, -1),
                    font: "500 0.85rem Tagesschrift, Inter, system-ui, sans-serif",
                    stroke: "#6EC9C4"
                  })
                    .bindTwoWay("text", "dept")
                )
              ),
              $(go.TextBlock, {
                row: 1,
                editable: true,
                minSize: new go.Size(10, 14),
                font: "400 0.95rem Tagesschrift, Inter, system-ui, sans-serif",
                stroke: "#f4f4f4"
              })
                .bindTwoWay("text", "title")
            ),
            $(go.Panel, "Spot", { isClipping: true, column: 1 },
              $(go.Shape, "Circle", { desiredSize: new go.Size(56, 56), strokeWidth: 0, fill: "#f4f4f4" }),
              $(go.Picture, {
                name: "PICTURE",
                desiredSize: new go.Size(56, 56),
                source: "https://gojs.net/latest/samples/images/user.svg",
                imageStretch: go.GraphObject.UniformToFill,
                margin: 0
              }).bind("source", "pic", pic => pic ? `/images/${pic}` : "https://gojs.net/latest/samples/images/user.svg")
            )
          )
        )
      )
    );

    // Link template
    diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5, selectable: false },
      $(go.Shape, { strokeWidth: 2, stroke: "#6EC9C4" })
    );

    diagram.model = $(go.TreeModel, { nodeDataArray });

    return () => {
      diagram.div = null;
    };
  }, []);

  return (
    <section className="min-h-screen bg-neutral font-sans flex flex-col items-center py-16">
      <div className="container text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tagesschrift-regular">
          Our Leadership Team
        </h1>
        <p className="text-lg md:text-xl text-primary/70 font-medium tagesschrift-regular">
          Meet the visionaries driving Ethiopian IT Park forward.
        </p>
      </div>
      <div
        ref={diagramRef}
        style={{ background: "#fff" }}
        className="w-full max-w-6xl h-[600px] rounded-2xl shadow-card border border-secondary transition-all duration-300"
      />
      <div className="mt-10 text-center text-sm text-gray-400 tagesschrift-regular">
        &copy; {new Date().getFullYear()} Ethiopian IT Park. All rights reserved.
      </div>
    </section>
  );
};

export default LeadershipTeam;