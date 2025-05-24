import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Node } from '../../projects/buttons-tree/src/lib/interfaces/node';
import { ButtonsTreeModule } from "../../projects/buttons-tree/src/lib/buttons-tree.module";
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ButtonsTreeService } from '../../projects/buttons-tree/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsTreeModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ButtonsTreeApp';
  buttonsTree_1: Node[] | undefined;
  buttonsTree_4: Node[] | undefined;
  buttonsTree: Node[] = [
    {
      data: {
        name: 'Food',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: [{
        data: {
          name: 'Fruit',
          key: undefined,
          imagePath: undefined,
          styleCSS: undefined,
          data: undefined,
          data1: undefined,
          data2: undefined,
          data3: undefined,
          data4: undefined,
          data5: undefined
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            name: 'Apple',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            name: 'WATER MELON',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }]
      },
      {
        data: {
          name: 'Vegetables',
          key: undefined,
          imagePath: undefined,
          styleCSS: undefined,
          data: undefined,
          data1: undefined,
          data2: undefined,
          data3: undefined,
          data4: undefined,
          data5: undefined
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            name: 'Caret',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            name: 'Tomato',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined

          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }],
      }]
    },
    {
      data: {
        name: 'null 2',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        name: 'color',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: [{
        data: {
          name: 'dark',
          key: undefined,
          imagePath: undefined,
          styleCSS: undefined,
          data: undefined,
          data1: undefined,
          data2: undefined,
          data3: undefined,
          data4: undefined,
          data5: undefined
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            name: 'blue',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            name: 'red',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }],
      },
      {
        data: {
          name: 'light',
          key: undefined,
          imagePath: undefined,
          styleCSS: undefined,
          data: undefined,
          data1: undefined,
          data2: undefined,
          data3: undefined,
          data4: undefined,
          data5: undefined
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            name: 'white',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            name: 'yellow',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }]
      }]
    },
    {
      data: {
        name: 'null 9',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        name: 'null 0',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        name: 'null 3',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        name: 'null 5',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    }
  ];

  buttonsTree_2: Node[] = [
    {
      data: {
        name: 'null 9',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: undefined
    },
    {
      data: {
        name: 'Food',
        key: undefined,
        imagePath: undefined,
        styleCSS: undefined,
        data: undefined,
        data1: undefined,
        data2: undefined,
        data3: undefined,
        data4: undefined,
        data5: undefined
      },
      guid: 'dsdds',
      isParent: false,
      nodes: [{
        data: {
          name: 'Fruit',
          key: undefined,
          imagePath: undefined,
          styleCSS: undefined,
          data: undefined,
          data1: undefined,
          data2: undefined,
          data3: undefined,
          data4: undefined,
          data5: undefined
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            name: 'Apple',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            name: 'WATER MELON',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }]
      },
      {
        data: {
          name: 'Vegetables',
          key: undefined,
          imagePath: undefined,
          styleCSS: undefined,
          data: undefined,
          data1: undefined,
          data2: undefined,
          data3: undefined,
          data4: undefined,
          data5: undefined
        },
        guid: 'dsdds',
        isParent: false,
        nodes: [{
          data: {
            name: 'Caret',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined,
        },
        {
          data: {
            name: 'Tomato',
            key: undefined,
            imagePath: undefined,
            styleCSS: undefined,
            data: undefined,
            data1: undefined,
            data2: undefined,
            data3: undefined,
            data4: undefined,
            data5: undefined
          },
          guid: 'dsdds',
          isParent: false,
          nodes: undefined
        }],
      }]
    },

  ]

  constructor(private httpClient: HttpClient, private buttonsTreeService: ButtonsTreeService) {

  }

  ngAfterViewInit(): void {
    this.getShortCutButtons().subscribe(data => {
      this.buttonsTree_1 = <Node[]>data.result.nodes;
    }, error => console.warn('errrorr:' + error));

    this.getShortCutButtonsV1().subscribe(data => {
      this.buttonsTree_4 = <Node[]>data.result.nodes;
    }, error => console.warn('errrorr:' + error));


    this.buttonsTreeService._buttonClicked.subscribe(node => {
      if (node) {
        console.warn('oooooooooooo:' + node.data.name);
      }
    });


  }
  ngOnInit(): void {

  }

  public getShortCutButtons(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get<any>(`https://localhost:7222/api/ShortCutButtons/GetButtonsTreeNodes`, { headers: header, withCredentials: true });
  }

  public getShortCutButtonsV1(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get<any>(`https://localhost:7222/api/ShortCutButtons/GetButtonsTreeNodesV1`, { headers: header, withCredentials: true });
  }


}
