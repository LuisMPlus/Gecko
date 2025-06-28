"use client"
import Team from "../components/Team/Team"
import { teamMembers } from "../data/team"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 ">
        
        <Team members={teamMembers} />
        
      </div>
    </div>
  )
}
