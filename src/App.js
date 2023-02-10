import logo from './logo.svg';
import monk from './assets/images/monk.png';
import halo from './assets/images/halo.png';
import './App.css';
import * as d3 from "d3";
import { useEffect, useState } from 'react';

function App() {
  let height = window.innerHeight;
  let width = window.innerWidth;
  let svg = d3.select("#mainSvg")

  useEffect(() => {
    let monkPresent = svg.selectAll('.monk')._groups.length !== 0;
    if( !monkPresent ){
      drawSvg();
    }
  }, [])

  const drawSvg = ()=>{
    let svg = d3.select("#mainSvg")
      svg.attr('height', height);
      svg.attr('width', width);

    
    var haloPng = svg.append('image')
      .attr('xlink:href', halo)
      .attr('background-color','black')
      .attr('width', width) 
      .attr('height', height + 30)
      .attr('class','monk');
    
    haloPng.attr("x",0);
    haloPng.attr("y",0);

    var myimage = svg.append('image') 
      .attr('xlink:href', monk)
      .attr('width', 106) 
      .attr('height', 149)
      .attr('class','monk')
      .attr('transform', `translate(${window.innerWidth/2 - 0}, ${window.innerHeight/2 + 40}) scale(0)`);
    myimage.attr("x",window.innerWidth/2 - 56);
    myimage.attr("y",window.innerHeight/2 - 86);

      myimage.transition()
      .delay(100)
      .duration(500)
      .attr("transform", "scale(1)")
      .ease(d3.easeBack)
      .end().then(
        () => {
          myimage.transition()
          // .delay(1000)
          .duration(1000)
          .attr("transform", " translate(0,-40) scale(1)")
          .end().then( () => {
            myimage.transition()
            // .delay(2000)
            .duration(1000)
            .attr("transform", " translate(0,0) scale(1)")
            .end().then(
              () => {
                myimage.transition()
                // .delay(1000)
                .duration(1000)
                .attr("transform", " translate(0,-40) scale(1)")
                .end().then( () => {
                  myimage.transition()
                  // .delay(2000)
                  .duration(1000)
                  .attr("transform", " translate(0,0) scale(1)")
      
                })
              }
            )
          })
        }
      )

    let firstText = svg.append('text')
    .text("Patience,")
    .style('font-style', 'italic')
    .attr('stroke', 'white')
    .attr('x',window.innerWidth/2 - 20 )
    .attr('y',window.innerHeight/2 + 120 )
    .style('opacity', 0);

    let secondText = svg.append('text')
    .text("Young padawan")
    .style('font-style', 'italic')
    .attr('stroke', 'white')
    .attr('x',window.innerWidth/2 - 50 )
    .attr('y',window.innerHeight/2 + 120 )
    .style('opacity', 0);

    firstText.transition()
    .delay(800)
    .duration(600)
    .style('opacity', 1)
    .end().then(
      () => {
        firstText.transition()
          .duration(600)
          .attr('transform', 'translate(-60, 0)')
          .end().then( () => {
            secondText.transition()
            .duration(600)
            .style('opacity', 1)
            .attr('transform', 'translate(40, 0)')
          })
      }
    )
  }
  
  return (
    <div style={{height: window.innerHeight, width: window.innerWidth}} className="App">
     <svg id="mainSvg"></svg>
    </div>
  );
}

export default App;
