import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Node } from '../../projects/buttons-tree/src/lib/interfaces/node';
import { ButtonsTreeModule} from "../../projects/buttons-tree/src/lib/buttons-tree.module";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ButtonsTreeService } from '../../projects/buttons-tree/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsTreeModule,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit  {
  title = 'ButtonsTreeApp';
  buttonsTree_1: Node[] | undefined;
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
  ];

  buttonsTree_2: Node[] = [
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
    
  ]

  constructor(private httpClient: HttpClient,private buttonsTreeService: ButtonsTreeService) { 

  }
  
  ngAfterViewInit(): void {
    this.getShortCutButtons().subscribe(data => {
      this.buttonsTree_1 = <Node[]>data.result.nodes;
    }, error => console.warn('errrorr:' + error));
  

    this.buttonsTreeService._buttonClicked.subscribe(node => {
      if(node)
      {
        console.warn('oooooooooooo:' + node.data.itemName);
      }
    });


  }
  ngOnInit(): void {

  }

  public getShortCutButtons(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get<any>(`https://localhost:7222/api/ShortCutButtons/GetButtonsTreeNodes`, { headers: header, withCredentials: true });
  }


}
