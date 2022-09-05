import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
]

const cellColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function ExpenseChart() {
    // eslint-disable-next-line no-extra-parens
    const CellsJSX = data.map((entry, index) => (
        <Cell
            name={entry.name}
            key={`cell-${entry.name}`}
            fill={cellColors[index]}
        />
    ))
    return (
        <PieChart width={300} height={300}>
            <Pie
                innerRadius={90}
                dataKey={'value'}
                data={data}
                legendType={'diamond'}
                label={true}
                labelLine={false}
            >
                <Tooltip label={'test'} active={true} />
                <Legend height={500} width={500} />
                {CellsJSX}
            </Pie>
        </PieChart>
    )
}
