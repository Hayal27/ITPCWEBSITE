import React, { useRef, useEffect, useState } from "react";
import * as go from "gojs";
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import './LeadershipTeam.css';
// This data structure can be replaced with API data in the future
const teamData = [
  // Executive Leadership
  {
    key: 1,
    name: "Henok Ahmed Ali",
    title: "CEO",
    dept: "Executive Leadership",
    desc: "Leading our organization with vision and dedication.",
    pic: "../../../images/henok.jpg",
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
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/senayt",
    },
  },
  {
    key: 3,
    parent: 2,
    name: "Habtam",
    title: "Accounting and Finance",
    dept: "General Management",
    desc: "Managing budgets and financial reporting.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/habtam",
    },
  },
  {
    key: 4,
    parent: 3,
    name: "Yosef Kinfe",
    title: "HR",
    dept: "General Management",
    desc: "Driving talent acquisition and engagement.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/yosefkinfe",
      twitter: "https://twitter.com/yosefkinfe",
    },
  },
  // IT Division
  {
    key: 5,
    parent: 2,
    name: "Simegn",
    title: "IT Deputy Manager",
    dept: "Information Technology",
    desc: "Supporting IT infrastructure and innovation.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/simegnit",
      twitter: "https://twitter.com/simegnit",
    },
  },
  {
    key: 6,
    parent: 5,
    name: "Nebyat Gebretsadik",
    title: "IT Service Head",
    dept: "Information Technology",
    desc: "Ensuring smooth IT service delivery.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/nebyat",
    },
  },
  {
    key: 7,
    parent: 5,
    name: "Merso Gobena",
    title: "Incubation and Innovation",
    dept: "Information Technology",
    desc: "Driving new product incubation.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/merso",
      facebook: "https://facebook.com/merso",
    },
  },
  {
    key: 8,
    parent: 5,
    name: "Eskedar Teshager",
    title: "Investment and Follow-up",
    dept: "Information Technology",
    desc: "Managing investments and project follow-ups.",
    pic: "../../../images/henok.jpg",
    email: "",
    social: {
      linkedin: "https://linkedin.com/in/eskedar",
    },
  },
  // Construction Division
  {
    key: 9,
    parent: 2,
    name: "Ermiyas Ketema",
    title: "Construction Deputy Manager",
    dept: "Construction",
    desc: "Coordinating construction projects.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/ermiyas",
    },
  },
  {
    key: 10,
    parent: 9,
    name: "Walelgn Walelgn",
    title: "Building Follow-up",
    dept: "Construction",
    desc: "Monitoring building progress.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/walelgn",
    },
  },
  {
    key: 11,
    parent: 9,
    name: "Ermiyas Ketema",
    title: "Land and Infrastructure",
    dept: "Construction",
    desc: "Managing land acquisition and site prep.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/ermiyask",
    },
  },
  {
    key: 12,
    parent: 9,
    name: "Desta Desta",
    title: "Facility and Maintenance",
    dept: "Construction",
    desc: "Ensuring facilities run smoothly.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/desta",
    },
  },
  // Business Development
  {
    key: 13,
    parent: 1,
    name: "Fetene",
    title: "Business Development",
    dept: "Business Development",
    desc: "Expanding partnerships and markets.",
    pic: "../../../images/henok.jpg",
    email: "email@itpark.com",
    social: {
      linkedin: "https://linkedin.com/in/fetene",
      twitter: "https://twitter.com/fetene",
    },
  },
];

// Senior Software Engineers (outside the hierarchy)
const seniorEngineers = [
  {
    id: 1,
    name: "Hayal Tamrat",
    title: "Senior Software Engineer",
    dept: "Software Development",
    desc: "Fullstack Engineer and Machine Learning engineer.",
    pic: "../../../images/henok.jpg",
    email: "hayal@itpark.com",
    social: {
      github: "https://github.com/hayaltamrat",
      linkedin: "https://linkedin.com/in/hayaltamrat",
      twitter: "https://twitter.com/hayaltamrat",
      instagram: "https://instagram.com/hayaltamrat",
    },
  },
  {
    id: 2,
    name: "Yesuf Fenta",
    title: "Senior Software Engineer",
    dept: "Software Development",
    desc: "Fullstack Engineer and API engineer.",
    pic: "../../../images/henok.jpg",
    email: "yesuf@itpark.com",
    social: {
      github: "https://github.com/yesuffenta",
      linkedin: "https://linkedin.com/in/yesuffenta",
      twitter: "https://twitter.com/yesuffenta",
    },
  },
];

// Component for social media links with tooltips
const SocialLinks = ({ social, className = "" }) => {
  if (!social) return null;
  
  return (
    <div className={`flex gap-3 ${className}`}>
      {social.linkedin && (
        <div className="group relative">
          <a 
            href={social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0077B5] text-white hover:bg-opacity-90 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            LinkedIn
          </div>
        </div>
      )}
      
      {social.twitter && (
        <div className="group relative">
          <a 
            href={social.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-all"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Twitter
          </div>
        </div>
      )}
      
      {social.facebook && (
        <div className="group relative">
          <a 
            href={social.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1877F2] text-white hover:bg-opacity-90 transition-all"
            aria-label="Facebook"
          >
            <FaFacebook size={18} />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Facebook
          </div>
        </div>
      )}
      
      {social.github && (
        <div className="group relative">
          <a 
            href={social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#333] text-white hover:bg-opacity-90 transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            GitHub
          </div>
        </div>
      )}
      
      {social.instagram && (
        <div className="group relative">
          <a 
            href={social.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:bg-opacity-90 transition-all"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Instagram
          </div>
        </div>
      )}
    </div>
  );
};

const LeadershipTeam: React.FC = () => {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<any>(null);

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
      // Add click handler to show member details
      "click": function(e) {
        const part = e.diagram.findPartAt(e.documentPoint, false);
        if (part) {
          const data = part.data;
          if (data) {
            setSelectedMember(data);
          }
        }
      }
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
        }).bind("source", "pic"),
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

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="relative">
              <div className="h-32 bg-gradient-to-r from-[#0C7C92] to-[#6EC9C4]"></div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <img 
                  src={selectedMember.pic} 
                  alt={selectedMember.name} 
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>
            <div className="pt-20 pb-6 px-6 text-center">
              <h3 className="text-2xl font-bold text-[#16284F]">{selectedMember.name}</h3>
              <p className="text-[#0C7C92] font-medium text-lg">{selectedMember.title}</p>
              <p className="text-[#6EC9C4] text-sm mt-1">{selectedMember.dept}</p>
              <p className="text-gray-500 mt-1">{selectedMember.email}</p>
              <p className="text-gray-600 mt-4">{selectedMember.desc}</p>
              
              {selectedMember.social && (
                <div className="mt-6 flex justify-center">
                  <SocialLinks social={selectedMember.social} />
                </div>
              )}
              
              <button 
                onClick={() => setSelectedMember(null)}
                className="mt-6 px-4 py-2 bg-[#0C7C92] text-white rounded-lg hover:bg-[#16284F] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Senior Software Engineers Section */}
      <div className="container mt-16 mb-12">
        <h2 className="text-3xl font-bold text-[#16284F] mb-8 text-center">
          Senior Software Engineers
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {seniorEngineers.map((engineer) => (
            <div 
              key={engineer.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-6">
                    <img 
                      src={engineer.pic} 
                      alt={engineer.name} 
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#6EC9C4]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#16284F]">{engineer.name}</h3>
                    <p className="text-[#0C7C92] font-medium">{engineer.title}</p>
                    <p className="text-[#6EC9C4] text-sm mt-1">{engineer.dept}</p>
                    <p className="text-gray-500 text-sm mt-1">{engineer.email}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm">{engineer.desc}</p>
                
                <div className="mt-5">
                  <SocialLinks social={engineer.social} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;