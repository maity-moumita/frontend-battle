export default function StatisticsSection() {
  const stats = [
    {
      title: 'Managed portfolio carbon footprint',
      value: '45,048',
      unit: 'tCO₂e',
      change: '↑ 16%',
      direction: 'up',
      data: [
        { year: 2022, value: 45048 },
        { year: 2021, value: 14111 },
        { year: 2020, value: 32813 },
        { year: 2019, value: 38673 },
      ],
    },
    {
      title: 'Managed portfolio energy intensity',
      value: '123',
      unit: 'kWh/m²',
      change: '↓ 22%',
      direction: 'down',
      data: [
        { year: 2022, value: 123 },
        { year: 2021, value: 128 },
        { year: 2020, value: 135 },
        { year: 2019, value: 157 },
      ],
    },
    {
      title: 'Managed portfolio energy consumption',
      value: '47,790,662',
      unit: 'kWh',
      change: '↓ 27%',
      direction: 'down',
      data: [
        { year: 2022, value: 47790662 },
        { year: 2021, value: 49324077 },
        { year: 2020, value: 48784205 },
        { year: 2019, value: 65198706 },
      ],
    },
  ]

  const getMax = data => Math.max(...data.map(d => d.value))

  return (
    <section id="stats" className="py-16 px-6 sm:px-10 lg:px-20 bg-white text-black">
      <div className="grid md:grid-cols-3 gap-10">
        {stats.map((block, i) => (
          <div key={i} className="space-y-6">
            <div>
              <h3 className="text-md font-medium mb-1">{block.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-semibold">{block.value}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{block.unit}</span>
              </div>
              <div className={`text-sm mt-1 ${block.direction === 'down' ? 'text-red-500' : 'text-green-600'}`}>
                from 2019 {block.change}
              </div>
            </div>
            <div className="space-y-3">
              {block.data.map((item, j) => {
                const max = getMax(block.data)
                const widthPercent = (item.value / max) * 100

                return (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.year}</span>
                      <span>{item.value.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded">
                      <div
                        className="h-full bg-[#7b4c4c] rounded transition-all"
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Optional footer buttons */}
            <div className="flex justify-between pt-6">
              <a href="#" className="text-sm underline flex items-center gap-1">
                {i === 0 ? 'See full breakdown of carbon footprint' : 'Download the data'}
                <span className="text-xl">{i === 0 ? '→' : '↓'}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
