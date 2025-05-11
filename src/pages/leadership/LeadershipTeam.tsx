import React, { useRef, useEffect } from "react";
import * as go from "gojs";

const nodeDataArray: go.ObjectData[] = [
  { key: 1, name: "Stella Payne Diaz", title: "CEO", dept: "Management", pic: "1.jpg", email: "sdiaz@example.com" },
  { key: 2, name: "Luke Warm", title: "VP Marketing/Sales", dept: "Management", pic: "2.jpg", email: "lwarm@example.com", parent: 1 },
  { key: 3, name: "Meg Meehan Hoffa", title: "Sales", dept: "Sales", pic: "3.jpg", email: "mhoffa@example.com", parent: 2 },
  { key: 4, name: "Peggy Flaming", title: "VP Engineering", dept: "Management", pic: "4.jpg", email: "pflaming@example.com", parent: 1 },
  { key: 5, name: "Saul Wellingood", title: "Manufacturing", dept: "Production", pic: "5.jpg", email: "swellingood@example.com", parent: 4 },
];

const LeadershipTeam: React.FC = () => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, diagramRef.current as HTMLDivElement, {
      initialAutoScale: go.Diagram.UniformToFill,
      layout: $(go.TreeLayout, {
        treeStyle: go.TreeLayout.StyleLastParents,
        arrangement: go.TreeLayout.ArrangementHorizontal,
        angle: 90,
        layerSpacing: 40,
        alternateAngle: 90,
        alternateLayerSpacing: 40,
        alternateAlignment: go.TreeLayout.AlignmentBus,
        alternateNodeSpacing: 30,
      }),
      "undoManager.isEnabled": true,
      "draggingTool.dragsTree": true,
      "draggingTool.isEnabled": true,
    });

    // Node Template
    diagram.nodeTemplate = $(
      go.Node,
      "Auto",
      {
        cursor: "pointer",
        isShadowed: true,
        shadowOffset: new go.Point(0, 3),
        shadowBlur: 10,
        shadowColor: "#d1d5db",
      },
      $(go.Shape, "RoundedRectangle", {
        fill: "#f4f4f4",
        stroke: "#0C7C92",
        strokeWidth: 2,
      }),
      $(
        go.Panel,
        "Horizontal",
        { padding: 2 },
        // Circular Picture
        $(go.Picture, {
          name: "PICTURE",
          desiredSize: new go.Size(74, 74),
          margin: new go.Margin(0, 10, 0, 0),
          imageStretch: go.GraphObject.UniformToFill,
          background: "#ccc",
        }).bind("source", "pic", (pic: string) =>
          pic ? `/images/${pic}` : "https://gojs.net/latest/samples/images/user.svg"
        ),
        // Info Panel
        $(
          go.Panel,
          "Table",
          {
            defaultAlignment: go.Spot.Left,
            stretch: go.Stretch.Fill,
          },
          $(
            go.TextBlock,
            {
              row: 0,
              font: "bold 1rem Inter, sans-serif",
              stroke: "#16284F",
              editable: true,
              wrap: go.TextBlock.WrapFit,
              width: 180,
            },
            new go.Binding("text", "name").makeTwoWay()
          ),
          $(
            go.TextBlock,
            {
              row: 1,
              font: "500 0.9rem Inter, sans-serif",
              stroke: "#0C7C92",
              editable: true,
              margin: new go.Margin(4, 0, 0, 0),
              wrap: go.TextBlock.WrapFit,
              width: 180,
            },
            new go.Binding("text", "title").makeTwoWay()
          ),
          $(
            go.TextBlock,
            {
              row: 2,
              font: "500 0.85rem Inter, sans-serif",
              stroke: "#6EC9C4",
              editable: true,
              margin: new go.Margin(4, 0, 0, 0),
              wrap: go.TextBlock.WrapFit,
              width: 180,
            },
            new go.Binding("text", "dept").makeTwoWay()
          ),
          $(
            go.TextBlock,
            {
              row: 3,
              font: "400 0.8rem Inter, sans-serif",
              stroke: "#9CA3AF",
              editable: false,
              margin: new go.Margin(4, 0, 0, 0),
              wrap: go.TextBlock.WrapFit,
              width: 180,
            },
            new go.Binding("text", "email").makeTwoWay()
          )
        )
      )
    );

    // Link Template
    diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 6 },
      $(go.Shape, { strokeWidth: 2, stroke: "#6EC9C4" })
    );

    // Assign Model
    diagram.model = $(go.TreeModel, { nodeDataArray });

    return () => {
      diagram.div = null;
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#f4f4f4] font-sans flex flex-col items-center py-16">
      <div className="container text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#16284F] mb-4">
          Our Leadership Team
        </h1>
        <p className="text-lg md:text-xl text-[#0C7C92] font-medium">
          Meet the leaders shaping the future of Ethiopian IT Park.
        </p>
      </div>
      <div
        ref={diagramRef}
        style={{ background: "#fff" }}
        className="w-full max-w-6xl h-[700px] rounded-2xl shadow-xl border border-gray-200 transition-all duration-300"
      />
    </section>
  );
};

export default LeadershipTeam;
