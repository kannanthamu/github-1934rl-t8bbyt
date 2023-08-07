import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nodes: Node[] = [];
  links: Link[] = [{ source: 1, target: 2}, {source: 1, target: 3 }, {source: 2, target: 3 }, {source: 2, target: 9 }];
  node_width: [] = [0,1,2,3,4,5,6,7,8,9,10];
  constructor() {
    const N = this.node_width.length,
      getIndex = (number) => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
      console.log(new Node(i));
      this.nodes[getIndex(i)].linkCount=this.node_width[i];
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        //this.nodes[getIndex(i)].linkCount++;
       // this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        //this.links.push(new Link(i, i * m));
      }
    }
    console.log(this.nodes);
    console.log(this.links);
  }
}
