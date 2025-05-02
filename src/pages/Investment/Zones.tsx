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
import './Zones.css'; // <-- Import the new CSS file

interface Zone {
  name: string;
  desc: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  position: { lat: number; lng: number };
  color: string;
}

// --- REFINED COORDINATES ---
// Approximate center based on "Gore to Tulu Dimtu road, east of Bole airport"
const center: [number, number] = [8.9850, 38.8350]; // Further Southeast

// Adjusted zone positions relative to the new center
const zones: Zone[] = [
  {
    name: 'BOP Zone (Nexus of Strategy)',
    desc:
      'Enter the BOP Zone, the park\'s command center...',
    Icon: FaBuilding,
    position: { lat: 8.9862, lng: 38.8336 }, // Adjusted from 9.0062, 38.7936
    color: '#e41a1c', // Red
  },
  {
    name: 'Manufacturing Zone (Forge of Creation)',
    desc:
      'Witness the alchemy of technology in the Manufacturing Zone.',
    Icon: FaIndustry,
    position: { lat: 8.9851, lng: 38.8343 }, // Adjusted from 9.0051, 38.7943
    color: '#377eb8', // Blue
  },
  {
    name: 'Knowledge Zone (Sanctum of Insight)',
    desc:
      'Unlock profound discoveries in the Knowledge Zone.',
    Icon: FaBookOpen,
    position: { lat: 8.9851, lng: 38.8357 }, // Adjusted from 9.0051, 38.7957
    color: '#4daf4a', // Green
  },
  {
    name: 'Incubation Zone (Crucible of Dreams)',
    desc:
      'Ignite nascent ventures in the Incubation Zone.',
    Icon: FaRocket,
    position: { lat: 8.9840, lng: 38.8363 }, // Adjusted from 9.0040, 38.7963
    color: '#984ea3', // Purple
  },
  {
    name: 'Datacenter & Mining Zone (Core of Power)',
    desc:
      'Harness the digital tempest in the Datacenter & Data Mining Zone. ',
    Icon: FaServer,
    position: { lat: 8.9852, lng: 38.8359 }, // Adjusted from 9.0052, 38.7959
    color: '#ff7f00', // Orange
  },
];

// Adjusted compound coordinates relative to the new center
const compoundCoords: [number, number][] = [
  [8.9863, 38.8334], // Adjusted from [9.0063, 38.7934]
  [8.9863, 38.8366], // Adjusted from [9.0063, 38.7966]
  [8.9833, 38.8366], // Adjusted from [9.0033, 38.7966]
  [8.9833, 38.8334], // Adjusted from [9.0033, 38.7934]
];
// --- END REFINED COORDINATES ---


const Zones: React.FC = () => (
  // Added 'zones-container' class
  <div className="zones-container px-4 py-12 mx-auto max-w-7xl">
    {/* Added 'zones-title' class */}
    <h1 className="zones-title text-4xl md:text-5xl font-extrabold text-center mb-10 text-indigo-700 drop-shadow-lg">
       Ethiopian IT Park: Five Zones of Innovation
    </h1>

    {/* Map Section */}
    <div className="w-full h-72 md:h-[650px] mb-16 shadow-xl rounded-xl overflow-hidden border-4 border-indigo-200 transition-shadow duration-300 hover:shadow-2xl">
      {/* Updated center prop */}
      <MapContainer center={center} zoom={17} style={{ width: '100%', height: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://wiki.openstreetmap.org/wiki/Esri">Esri</a> &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {/* Updated positions prop */}
        <LeafletPolygon
          positions={compoundCoords}
          pathOptions={{ color: '#fde047', weight: 3, fillColor: '#facc15', fillOpacity: 0.1 }}
        />
        {/* Uses updated zone positions */}
        {zones.map(({ name, desc, Icon, position, color }) => (
          <CircleMarker
            key={name}
            center={[position.lat, position.lng]}
            radius={10}
            pathOptions={{
                fillColor: color,
                color: '#ffffff',
                weight: 2,
                fillOpacity: 0.9,
                className: 'zone-marker-pulsate'
             }}
          >
            <Tooltip
              direction="top"
              offset={[0, -12]}
              opacity={1}
              className="magical-tooltip"
            >
              <div className="flex items-center space-x-3">
                <Icon className="tooltip-icon w-8 h-8 flex-shrink-0" style={{ color: color }} />
                <div>
                  <h3 className="text-base font-bold">{name}</h3>
                  <p className="text-xs mt-1">{desc}</p>
                </div>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>

    {/* Zone Cards Section (remains the same) */}
    <div className="grid grid-cols-1 sm:g rid-cols-2 lg:grid-cols-3 gap-8">
      {zones.map(({ name, desc, Icon, color }) => (
        <div
          key={name}
          className="zone-card bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4"
          style={{ borderTopColor: color }}
        >
          <Icon className="zone-card-icon w-14 h-14 mb-4" style={{ color: color }} />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Zones;