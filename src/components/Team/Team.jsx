"use client"


import { colors, gradients } from "../../data/team"
import TeamMemberCard from "./MemberCard"

export default function Team({ members }) {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary }}>
          Nuestro Equipo
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conoce a los profesionales apasionados que hacen posible nuestra visión
        </p>
        {/* Decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 rounded-full" style={{ background: gradients.decorative }} />
        </div>
      </div>

      {/* First section - First 3 members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {members.slice(0, 3).map((member, index) => (
          <TeamMemberCard key={member.name} member={member} index={index} />
        ))}
      </div>

      {/* Second section - Last 2 members centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {members.slice(3, 5).map((member, index) => (
          <TeamMemberCard key={member.name} member={member} index={index + 3} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: gradients.decorative }} />
      </div>
    </div>
  )
}
