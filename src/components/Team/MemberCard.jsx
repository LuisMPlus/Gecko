"use client";

import { colors, gradients, shadows } from "@/data/team";

export default function TeamMemberCard({ member, index }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.boxShadow = shadows.hover;
    e.currentTarget.style.borderColor = colors.secondary;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.boxShadow = shadows.default;
    e.currentTarget.style.borderColor = colors.accent;
  };

  return (
    <div
      className="group relative bg-white border-2 rounded-xl p-6 cursor-pointer transform transition-all duration-300 ease-out hover:scale-102 hover:-translate-y-1"
      style={{
        borderColor: colors.accent,
        boxShadow: shadows.default,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay that appears on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: gradients.overlay }}
      />

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <div
            className="w-24 h-24 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-102 transition-transform duration-300"
            style={{ background: gradients.avatar }}
          >
            {/* Imagen del miembro */}
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3
            className="text-xl font-bold mb-1 group-hover:text-opacity-90 transition-all duration-300"
            style={{ color: colors.primary }}
          >
            {member.name}
          </h3>

          <div
            className="inline-block text-sm font-semibold mb-3 px-4 py-2 rounded-full text-white relative overflow-hidden transition-transform duration-300"
            style={{ background: gradients.badge }}
          >
            <span className="relative z-10">{member.role}</span>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-500" />
          </div>

          <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
}
