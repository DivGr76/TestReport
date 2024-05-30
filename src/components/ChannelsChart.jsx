import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChannelsChart = () => {
    const data = [
        {
          name: 'Shares',
          value: 80,
          "fill": "#5BC0DE"
        },{
            name: 'Mutual Funds',
            value: 35,
            "fill": "#FFD700"
          }]
    return (
        <>
      <h3 style={{fontFamily:'Epilogue', fontWeight:'700'}}>Channels</h3>
      <div style={{height: 200 }}>
        <ResponsiveContainer >
          <BarChart
            data={data}
          >
            <CartesianGrid stroke="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend  layout="vertical" verticalAlign="middle" align="right" payload={ [{ value:'Shares' , type: 'circle', color:"#5BC0DE" },{ value:'Mutual Funds' , type: 'circle', color: "#FFD700"}]} />
            <Bar dataKey="value" barSize={30}  activeBar={<Rectangle fill="blue" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
        </div>
    </>
      );
}

export default ChannelsChart
