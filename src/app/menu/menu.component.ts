import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  accesOptions: any[];
  private mediaSub: Subscription

  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
  ) {
  }

  ngOnInit() {

    this.accesOptions = PERMISOS;

    this.dataSource.data = PERMISOS;
  }

  // tslint:disable-next-line:variable-name
  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.item && node.item.length > 0,
      name: node.name,
      route: node.route,
      icon: node.icon,
      level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.item);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

const PERMISOS = [
  {
    name: 'Peliculas',
    icon: 'movie',
    item: [
      {name: 'Peliculas Disponibles', route: '/movies', icon: 'table_chart'},
      {name: 'Buscar pelicula', route: '/movies', icon: 'table_chart'}
    ]
  },
  {
    name: 'Usuarios',
    icon: 'perm_identity',
    item: [{name: 'Busqueda de usuarios por Id', route: '/users', icon: 'table_chart'}]
  },
  {name: 'configuración', route: '', icon: 'settings', item: [{name: 'Configuracion de la pagina', route: '', icon: 'table_chart'}]},
  {name: 'ayuda', route: '', icon: 'help', item: [{name: 'Ayuda', route: '', icon: 'table_chart'}]},
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  route: string;
  level: number;
}

