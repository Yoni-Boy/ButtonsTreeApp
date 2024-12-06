import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Node } from '../../projects/buttons-tree/src/lib/interfaces/node';
import { ButtonsTreeModuleModule } from "../../projects/buttons-tree/src/lib/buttons-tree.module.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsTreeModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ButtonsTreeApp';
  buttonsTree: Node[] = [
    {
      data: {
        itemName: 'Food'
      },
      guid: 'dsdds',
      isParent: false,
      nodes: [{
        data: {
          itemName: 'Fruit'
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            itemName: 'Apple'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            itemName: 'WATER MELON'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }]
      },
      {
        data: {
          itemName: 'Vegetables'
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            itemName: 'Caret'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            itemName: 'Tomato'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }],
      }]
    },
    {
      data: {
        itemName: 'null 2'
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        itemName: 'color'
      },
      guid: 'dsdds',
      isParent: false,
      nodes: [{
        data: {
          itemName: 'dark'
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            itemName: 'blue'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            itemName: 'red'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }],
      },
      {
        data: {
          itemName: 'light'
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            itemName: 'white'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            itemName: 'yellow'
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }]
      }]
    },
    {
      data: {
        itemName: 'null 9'
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        itemName: 'null 0'
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        itemName: 'null 3'
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        itemName: 'null 5'
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    }
  ]
}
