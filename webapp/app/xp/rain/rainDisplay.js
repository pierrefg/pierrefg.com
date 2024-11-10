import React from 'react';

export default function RainDisplay({ drops, groundCollisions, umbrella, umbrellaCollisions }) {
  return (
    <svg className="absolute z-40" width="100%" height="100%">
      <g>
        {drops.map((path, index) => (
          <path
            key={index}
            d={`M${path.points[0].x},${path.points[0].y} L${path.points[1].x},${path.points[1].y}`}
            fill="transparent"
            stroke="white"
            strokeWidth={path.width}
            opacity={path.opacity}
          />
        ))}
        {groundCollisions.map((collision_point, index) => (
          <circle 
            key={index}
            cx={collision_point.point.x} 
            cy={collision_point.point.y - Math.random() * 5}
            r={Math.random() * 2.5} 
            fill="white" 
          />
        ))}
      </g>
      {umbrella && (
        <g>
          <path
            d={umbrella.path}
            fill="transparent"
            stroke="white"
            strokeWidth="3"
            opacity="1"
          />
          <polygon points={umbrella.polygon} fill="black" opacity="1" />
          {umbrellaCollisions.map((collision_point, index) => (
            <circle 
              key={index}
              cx={collision_point.point.x} 
              cy={collision_point.point.y - Math.random() * 5}
              r={Math.random() * 2.5} 
              fill="white" 
            />
          ))}
        </g>
      )}
    </svg>
  );
}