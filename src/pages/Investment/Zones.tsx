
import React from 'react';
import {
  MapContainer,
  TileLayer,
  Polygon as LeafletPolygon,
  CircleMarker,
  Tooltip,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  FaBuilding,
  FaIndustry,
  FaBookOpen,
  FaRocket,
  FaServer,
} from 'react-icons/fa';

interface Zone {
  name: string;
  desc: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  position: { lat: number; lng: number };
  color: string;
}

const zones: Zone[] = [
  {
    name: 'BOP Zone',
    desc:
      'Step into the BOP Zone—the strategic heart of the IT Park—where dynamic conference halls, cutting-edge boardrooms, and collaborative co-working studios empower leaders to shape Ethiopia’s tech future.',
    Icon: FaBuilding,
    position: { lat: 9.0627, lng: 38.7481 },
    color: '#e41a1c',
  },
  {
    name: 'Manufacturing Zone',
    desc:
      'Feel the pulse of innovation in the Manufacturing Zone: precision robotics, 3D printers, and advanced fabrication lines bring hardware prototypes to life under uncompromising quality standards.',
    Icon: FaIndustry,
    position: { lat: 9.0616, lng: 38.7488 },
    color: '#377eb8',
  },
  {
    name: 'Knowledge Zone',
    desc:
      'Immerse yourself in the Knowledge Zone, a realm of research labs, digital libraries, and seminar theaters—where academics, data scientists, and industry experts converge to spark fresh ideas.',
    Icon: FaBookOpen,
    position: { lat: 9.0616, lng: 38.7502 },
    color: '#4daf4a',
  },
  {
    name: 'Incubation Zone',
    desc:
      'Ignite your startup’s potential in the Incubation Zone, where tailored mentorship, seed funding, and state-of-the-art prototyping facilities converge to transform bold visions into reality.',
    Icon: FaRocket,
    position: { lat: 9.0605, lng: 38.7508 },
    color: '#984ea3',
  },
  {
    name: 'Datacenter & Data Mining Zone',
    desc:
      'Discover the Datacenter & Data Mining Zone: climate-controlled server farms, ultra-fast uplinks, and GPU arrays deliver unrivaled power for AI training, big-data analytics, and global-scale computation.',
    Icon: FaServer,
    position: { lat: 9.0617, lng: 38.7504 },
    color: '#ff7f00',
  },
];

const compoundCoords: [number, number][] = [
  [9.0628, 38.7479],
  [9.0628, 38.7511],
  [9.0598, 38.7511],
  [9.0598, 38.7479],
];

const center: [number, number] = [9.0615, 38.7495];

const Zones: React.FC = () => (
  <div className="px-4 py-8 mx-auto max-w-7xl">
    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-indigo-600 animate-pulse">
      Ethiopian IT Park – Five Dynamic Zones
    </h1>

    {/* Map */}
    <div className="w-full h-64 md:h-[600px] mb-12 shadow-lg rounded-lg overflow-hidden">
      <MapContainer center={center} zoom={17} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LeafletPolygon
          positions={compoundCoords}
          pathOptions={{ color: '#FF0000', weight: 2, fillColor: '#FF0000', fillOpacity: 0.15 }}
        />

        {zones.map(({ name, desc, Icon, position, color }) => (
          <CircleMarker
            key={name}
            center={[position.lat, position.lng]}
            radius={12}
            pathOptions={{ fillColor: color, color: '#fff', weight: 3, fillOpacity: 1 }}
          >
            <Tooltip
              direction="top"
              offset={[0, -14]}
              opacity={0.95}
              className="bg-white rounded-xl p-4 shadow-2xl animate-fade-in"
            >
              <div className="flex flex-col items-center space-y-2">
                <Icon className="w-10 h-10 text-current transition-transform duration-300 hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-xs text-gray-600 text-center">{desc}</p>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>

    {/* Zone Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {zones.map(({ name, desc, Icon }) => (
        <div
          key={name}
          className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center"
        >
          <Icon className="w-16 h-16 text-indigo-600 mb-4 transition-transform duration-500 hover:scale-110" />
          <h2 className="text-xl font-bold text-indigo-600">{name}</h2>
          <p className="mt-2 text-gray-600 text-sm text-center">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Zones;
