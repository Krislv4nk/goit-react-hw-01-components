
import React, { Component } from 'react';
function getRandomColor() {
  const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * values.length);
    color += values[index];
  }
  return color;
}
export class Statistics extends Component {
  render() {
    const { title, stats } = this.props;
return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
  <ul className="stat-list">
          {stats.map((stat) => (
            <li
              key={stat.id}
              className="item"
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}