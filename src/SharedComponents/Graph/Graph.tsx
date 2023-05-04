import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const chartData = [
    {
      subject: 'Leadership',
      A: 90,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Communication',
      A: 40,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Team-work',
      A: 90,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Self-awareness',
      A: 50,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Collaboration',
      A: 90,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Resilience',
      A: 70,
      B: 85,
      fullMark: 150,
    },
  ];
  
  export function Graph() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
  }