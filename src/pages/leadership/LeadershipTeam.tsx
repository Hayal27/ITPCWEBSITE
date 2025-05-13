import React, { useRef, useEffect } from "react";
import * as go from "gojs";

// This data structure can be replaced with API data in the future
const teamData = [
  // Executive Leadership
  {
    key: 1,
    name: "Henok Ahmed Ali",
    title: "CEO",
    dept: "Executive Leadership",
    desc: "Leading our organization with vision and dedication.",
    pic: "henok.jpg",
    email: "henokali@itpark.gov.et",
    social: {
      twitter: "https://twitter.com/henokali",
      linkedin: "https://linkedin.com/in/henokali",
      facebook: "https://facebook.com/henokali",
    },
  },
  // General Management Team
  {
    key: 2,
    parent: 1,
    name: "Senayt",
    title: "General Manager",
    dept: "General Management",
    desc: "Overseeing operations and strategy execution.",
    pic: "senayt.jpg",
    email: "email@itpark.com",
  },
  {
    key: 3,
    parent: 2,
    name: "Habtam",
    title: "Accounting and Finance",
    dept: "General Management",
    desc: "Managing budgets and financial reporting.",
    pic: "habtam.jpg",
    email: "email@itpark.com",
  },
  {
    key: 4,
    parent: 2,
    name: "Yosef Kinfe",
    title: "HR",
    dept: "General Management",
    desc: "Driving talent acquisition and engagement.",
    pic: "yosef.jpg",
    email: "email@itpark.com",
  },
  // IT Division
  {
    key: 5,
    parent: 1,
    name: "Simegn",
    title: "IT Deputy Manager",
    dept: "Information Technology",
    desc: "Supporting IT infrastructure and innovation.",
    pic: "simegn.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/simegnit",
    },
  },
  {
    key: 6,
    parent: 5,
    name: "Nebyat Gebretsadik",
    title: "IT Service Head",
    dept: "Information Technology",
    desc: "Ensuring smooth IT service delivery.",
    pic: "nebyat.jpg",
    email: "email@itpark.com",
  },
  {
    key: 7,
    parent: 5,
    name: "Merso Gobena",
    title: "Incubation and Innovation",
    dept: "Information Technology",
    desc: "Driving new product incubation.",
    pic: "merso.jpg",
    email: "email@itpark.com",
  },
  {
    key: 8,
    parent: 5,
    name: "Eskedar Teshager",
    title: "Investment and Follow-up",
    dept: "Information Technology",
    desc: "Managing investments and project follow-ups.",
    pic: "eskedar.jpg",
    email: "",
  },
  // Construction Division
  {
    key: 9,
    parent: 1,
    name: "Ermiyas Ketema",
    title: "Construction Deputy Manager",
    dept: "Construction",
    desc: "Coordinating construction projects.",
    pic: "ermiyas.jpg",
    email: "email@itpark.com",
  },
  {
    key: 10,
    parent: 9,
    name: "Walelgn Walelgn",
    title: "Building Follow-up",
    dept: "Construction",
    desc: "Monitoring building progress.",
    pic: "walelgn.jpg",
    email: "email@itpark.com",
  },
  {
    key: 11,
    parent: 9,
    name: "Ermiyas Ketema",
    title: "Land and Infrastructure",
    dept: "Construction",
    desc: "Managing land acquisition and site prep.",
    pic: "ermiyas.jpg",
    email: "email@itpark.com",
  },
  {
    key: 12,
    parent: 9,
    name: "Desta Desta",
    title: "Facility and Maintenance",
    dept: "Construction",
    desc: "Ensuring facilities run smoothly.",
    pic: "desta.jpg",
    email: "email@itpark.com",
  },
  // Business Development
  {
    key: 13,
    parent: 1,
    name: "Fetene",
    title: "Business Development",
    dept: "Business Development",
    desc: "Expanding partnerships and markets.",
    pic: "fetene.jpg",
    email: "email@itpark.com",
  },
  // Software Developers
  {
    key: 14,
    parent: 6,
    name: "Hayal Tamrat",
    title: "Senior Software Engineer",
    dept: "Software Development",
    desc: "Fullstack Engineer and Machine Learning engineer.",
    pic: "hayal.jpg",
    email: "email@itpark.com",
    social: {
      github: "https://git.com/henokali",
    },
  },
  {
    key: 15,
    parent: 7,
    name: "Yesuf Fenta",
    title: "Senior Software Engineer and Incubator",
    dept: "Software Development",
    desc: "Fullstack Engineer and API engineer.",
    pic: "yesuf.jpg",
    email: "email@itpark.com",
    social: {
      github: "https://git.com/henokali",
    },
  },
];

const LeadershipTeam: React.FC = () => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ = go.GraphObject.make;
    go.Diagram.licenseKey = "";

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
        $(go.Picture, {
          name: "PICTURE",
          desiredSize: new go.Size(74, 74),
          margin: new go.Margin(0, 10, 0, 0),
          imageStretch: go.GraphObject.UniformToFill,
          background: "#ccc",
        }).bind("source", "pic", (pic: string) =>
          pic ? `/images/${pic}` : "https://gojs.net/latest/samples/images/user.svg"
        ),
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
              editable: false,
              wrap: go.TextBlock.WrapFit,
              width: 180,
            },
            new go.Binding("text", "name")
          ),
          $(
            go.TextBlock,
            {
              row: 1,
              font: "500 0.9rem Inter, sans-serif",
              stroke: "#0C7C92",
              editable: false,
              margin: new go.Margin(4, 0, 0, 0),
              wrap: go.TextBlock.WrapFit,
              width: 180,
            },
            new go.Binding("text", "title")
          ),
          $(
            go.TextBlock,
            {
              row: 2,
              font: "500 0.85rem Inter, sans-serif",
              stroke: "#6EC9C4",
              editable: false,
              margin: new go.Margin(4, 0, 0, 0),
              wrap: go.TextBlock.WrapFit,
              width: 180,
            },
            new go.Binding("text", "dept")
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
            new go.Binding("text", "email")
          )
        )
      )
    );

    diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 6 },
      $(go.Shape, { strokeWidth: 2, stroke: "#6EC9C4" })
    );

    diagram.model = $(go.TreeModel, { nodeDataArray: teamData });

    return () => {
      diagram.div = null;
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#f4f4f4] font-sans flex flex-col items-center pt-40">
      <div className="container text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#16284F] mb-4 scroll-mt-24">
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