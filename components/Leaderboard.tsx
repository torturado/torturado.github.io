import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Leaderboard() {
  const leaderboardData = [
    { name: "Player1 (EXP)", gems: "210M" },
    { name: "Player2 (EXP)", gems: "20M" },
    { name: "Player3 (EXP)", gems: "10M" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {leaderboardData.map((player, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>
                {index + 1}. {player.name}
              </span>
              <span>{player.gems} Gems</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

