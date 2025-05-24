import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Node } from './interfaces/node';
import { ButtonsTreeService } from './buttons-tree.service';

@Component({
  selector: 'buttons-tree',
  templateUrl: './buttons-tree.component.html',
  styleUrls: ['./buttons-tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsTreeComponent implements OnInit, OnChanges {
  
  @ViewChild('root') _elementRootRef: ElementRef<HTMLDivElement> | undefined;
  //@ViewChild(".buttons-board[data-leveltree='" + children_level_tree + "']") _elementRef: ViewContainerRef | undefined;

  //This is for adding text to the back button in the panel tree
  @Input() buttonBackTitle: string = "";  
  //This is for the images storage root path
  @Input() storageRootPath: string = "";   
  @Input() buttonsTree: Node[] | undefined;
  @Input() level: number = 0;
  @Input() level_tree: string = "0";

  length: number = 0;
  row_number: number = 0;
  max_column_number: number = 4;
  number_of_row: number[] = [];


  private _activeButtonClass = 'active';
  private _holdInteractionTimeout!: number;
  private _holdTimeout!: number;
  private _isMouseHold!: boolean;

  constructor(private buttonsTreeService:ButtonsTreeService) {

  }
  ngOnChanges(changes: any) {
    //if (changes.message != null && changes.message.currentValue != null) {
    //  this.ExecuteMyFunction(this.message);
    //}
    //this is to save the length of the shortcut buttons list when We finish to load.
    if (this.buttonsTree?.length) {
      this.length = this.buttonsTree?.length;
      this.row_number = Math.ceil(this.length / this.max_column_number);
      //We need to initialize the Number Of Row list to deal with the for each HTML...
      for (let i = 1; i <= this.row_number; i++) {
        this.number_of_row.push(i);
      }
    }
  }
  ngOnInit() {

  }
  callPapa(event: Event,node: Node) {
    //this.shortcutButtonsService.sendShortCutButton(scb);
    if (this.isHaveChildrens(node)) {
      const button = event.target as HTMLButtonElement;
      let children_level_tree = button.getAttribute('data-childrenleveltree');
      
      //var element = document.querySelector('.buttons-board');
      var rootElem = document.querySelector('#buttons-tree-board');
      var childElem = document.querySelector(".buttons-board[data-leveltree='" + children_level_tree + "']");

      //element?.setAttribute('style', 'display:none;');
      this._elementRootRef?.nativeElement.setAttribute('style', 'display:none;');
      childElem?.setAttribute('style', 'display:block;');
      if(childElem)
        rootElem?.append(childElem);
      
      // $('.buttons-board').attr('style', 'display:none;');
      // $(".buttons-board[data-leveltree='" + children_level_tree + "']").attr('style','display:block;');
      // $(".buttons-board[data-leveltree='" + children_level_tree + "']").detach().appendTo("#buttons-tree-board");

    }
    else {
      if (node.data != undefined)
      {
        //this.shoppingCartService.addingItemToShoppingCart(node.data);
      }
    }
    //$('.buttons-board').attr('style', 'display:none;');

    //var level_tree_node = $(this).data('leveltree');
    //var root_level = ("" + level_tree_node).split(".")[0] + ("" + level_tree_node).split(".")[1];
    //alert("root_level:" + root_level);
    //var new_class_attr = $(ul_element).attr("class").replace("show", "");
    //$(ul_element).attr("class", new_class_attr);
    //$(".shortcut_buttons_tr").find("[data-leveltree='" + current + "']"); 



      //$('button').click(function () { alert('Wass up!'); });
  }

  public isHaveChildrens(node: Node | undefined) {
    if (node != undefined) {
      if (node.nodes != undefined) {
        if (node.nodes.length > 0) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
    //return this.database.isExpandable(node);
  }
  public getBlockButtons(index: number) {
    let temp_list: Node[] = [];

    /*this.shortcutButtonsData?.buttons?.length*/
    //console.warn("ttttttt:1");
    //console.warn("ttttttt:max_column_number:" + this.max_column_number);
    //console.warn("ttttttt:max_column_number:" + this.row_number);
    //console.warn("ttttttt:max_column_number:" + ((index - 1) * this.row_number));
    for (let i = ((index - 1) * this.row_number); i < this.max_column_number; i++) {
      //console.warn("ttttttt:2");
      if (i < this.length) {
        if (this.buttonsTree !== undefined)
        {
          //console.warn("tttt:" + this.buttonsTree.at(i)?.guid);    
          temp_list.push(<Node>this.buttonsTree.at(i));
        }
      }
    }
    return temp_list;
  }











  /**
   * Handles button up
   *
   * @param button The button layout name.
   * @param event The button event.
   */
  handleButtonUp( e: Event,scb: Node): void {
    const button = e.target as HTMLButtonElement;
    //console.log('Key up:', scb.data?.itemName);
    if (e) {
      /**
       * Handle event options
       */
      e.preventDefault();
      e.stopPropagation();
    }


    var isButtonElement = true;
    if (button instanceof HTMLImageElement) {
      //If we click up on image we want to capture the parent element.
      //because the image element is a child in the button element and if we calling to 
      //'_setActiveButton' with image element we don't and make 'un active' class we don't declare any active class to the image style
      //that the reason we want to get the parent element of this image this his button, to remove active right to the button
      //&.active { ...  
      isButtonElement = false;
      //console.log("The image element triggered the event.");
    } 
    else if (button instanceof HTMLButtonElement) {
      isButtonElement = true;
      //console.log("The button element triggered the event.");
    } 
    else {
      isButtonElement = false;
      //console.log("Another element triggered the event:", button);
    }



    /**
     * Remove active class
     */
    //But before we remove the active button We need to check who is trigger this handle button up event.
    //If this the image event (this element is existent in the button element) so we need to remove the parent active style
    //and not the image active.
    
    if(isButtonElement)
    { 
      this._removeActiveButton(button);
    }
    else
    {
      const parent = button.parentElement as HTMLButtonElement;
      this._removeActiveButton(parent);
    }

    this._isMouseHold = false;
    if (this._holdInteractionTimeout)
      clearTimeout(this._holdInteractionTimeout);
  }

/**
   * Handles button down
   *
   * @param button The button layout name.
   * @param event The button event.
   */
handleButtonDown(e: Event,scb: Node): void {
  console.log('Key down::::', scb.data?.name);
  const button = e.target as HTMLButtonElement;
  if (e) {
    /**
     * Handle event options
     */
    e.preventDefault();
    e.stopPropagation();
  }


  var isButtonElement = true;
  if (button instanceof HTMLImageElement) {
    //If we click on image we want to capture the parent element.
    //because the image element is a child in the button element and if we calling to 
    //'_setActiveButton' with image element we don't and make 'active' class we don't declare any active class to the image style
    //that the reason we want to get the parent element of this image this his button, to set active right to the button
    //&.active { ...  
    isButtonElement = false;
    //console.log("The image element triggered the event.");
  } 
  else if (button instanceof HTMLButtonElement) {
    isButtonElement = true;
    console.log("The button element triggered the event.");
  } 
  else {
    isButtonElement = false;
    console.log("Another element triggered the event:", button);
  }



  /**
   * Add active class
   */
  if(!this.isHaveChildrens(scb))
  { 
      if(isButtonElement)
        { 
          this._setActiveButton(button);
        }
        else
        {
          const parent = button.parentElement as HTMLButtonElement;
          this._setActiveButton(parent);
        }
  }
  if (this._holdInteractionTimeout)
    clearTimeout(this._holdInteractionTimeout);
  if (this._holdTimeout) 
    clearTimeout(this._holdTimeout);
  this._isMouseHold = true;

  /**
   * Time to wait until a key hold is detected
   */
  this._holdTimeout = window.setTimeout(() => {
    if (this._isMouseHold && !this.isHaveChildrens(scb)) 
      {
      this.handleButtonHold(e,scb);
    }
    clearTimeout(this._holdTimeout);
  }, 500);

  /**
   * Handel button Click after button down
   */
  //!!!! but wait a seconde what happen if we click on <p> element that inside the <button> element so if we calling to
  // this.handleButtonPress(e,scb) with e parameter the handleButtonPress make convert of this e to 'HTMLButtonElement'
  //So if we click on <p> or other element inside the button (<button>... <p></p></button>)
  //We need to get the event of the button so that the reason we getting the parent element that is mean the button
  if(isButtonElement)
  {
    this.handleButtonPress(button,scb);
  }
  else
  {
    const parent = button.parentElement as HTMLButtonElement;
    this.handleButtonPress(parent,scb);
  }
}

 /**
   * Handles button hold
   */
 handleButtonHold(e: Event,scb: Node): void {
  //console.log('Key hold:', scb.data?.itemName);
  if (this._holdInteractionTimeout)
    clearTimeout(this._holdInteractionTimeout);

  /**
   * Timeout dictating the speed of key hold iterations
   */
  this._holdInteractionTimeout = window.setTimeout(() => {
    if (this._isMouseHold) {
      this.handleButtonPress(e.target as HTMLButtonElement,scb);
      this.handleButtonHold(e,scb);
    } else {
      clearTimeout(this._holdInteractionTimeout);
    }
  }, 100);
}


/**
   * Handles clicks made to keyboard buttons
   *
   * @param button The button layout name.
   * @param event The button event.
   */
handleButtonPress(button: HTMLButtonElement,scb: Node): void {
  this.buttonsTreeService.buttonClicked(scb);
  if (this.isHaveChildrens(scb)) {
    let children_level_tree = button.getAttribute('data-childrenleveltree');
    
    var rootElem = document.querySelector('#buttons-tree-board');
    var childElem = document.querySelector(".buttons-board[data-leveltree='" + children_level_tree + "']");

    this._elementRootRef?.nativeElement.setAttribute('style', 'display:none;');
    childElem?.setAttribute('style', 'display:block;');
    if(childElem)
      rootElem?.append(childElem);
  }
  else {
    if (scb.data != undefined)
    {
      this.buttonsTreeService.barrenButtonClicked(scb);
    }
  }  
}
// handleButtonPress(event: Event,scb: Node): void {
//   this.buttonsTreeService.buttonClicked(scb);
//   if (this.isHaveChildrens(scb)) {
//     const button = event.target as HTMLButtonElement;
//     let children_level_tree = button.getAttribute('data-childrenleveltree');
    
//     var rootElem = document.querySelector('#buttons-tree-board');
//     var childElem = document.querySelector(".buttons-board[data-leveltree='" + children_level_tree + "']");

//     this._elementRootRef?.nativeElement.setAttribute('style', 'display:none;');
//     childElem?.setAttribute('style', 'display:block;');
//     if(childElem)
//       rootElem?.append(childElem);
//   }
//   else {
//     if (scb.data != undefined)
//     {
//       this.buttonsTreeService.barrenButtonClicked(scb);
//     }
//   }  
// }



/**
   * Set active class in button
   *
   * @param buttonName
   */
private _setActiveButton(buttonName: HTMLButtonElement): void {
  buttonName.classList.add(this._activeButtonClass);
}

/**
 * Remove active button
 *
 * @param buttonName
 */
private _removeActiveButton(buttonName?: HTMLButtonElement): void {
  //console.log('_removeActiveButton0:', buttonName);
  if (buttonName) {
    //console.log('_removeActiveButton:', buttonName);
    if (buttonName && buttonName.classList) {
      //console.log('_removeActiveButton+:', buttonName);
      buttonName.classList.remove(this._activeButtonClass);
    }
  } 
}

}

@Component({
  selector: 'button-node',
  templateUrl: './/button-node.component.html',
  styleUrl: './button-node.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNodeComponent implements OnInit, OnChanges {
  @Input() node: Node | undefined;

  // @Input() parentNode: Element | undefined;
  // @Input() rootNode: Element | undefined;

  @ViewChild('node_element') _elementRef: ElementRef<HTMLDivElement> | undefined;

  //This is for adding text to the back button in the panel tree
  @Input() buttonBackTitle: string = "";  
  //This is for the images storage root path
  @Input() storageRootPath: string = "";   
  @Input() level: number = 0;
  @Input() level_tree: string = "0";
  //private _elementDivRef: ElementRef<HTMLDivElement>,
  length: number = 0;
  row_number: number = 0;
  max_column_number: number = 4;
  number_of_row: number[] = [];


  private _activeButtonClass = 'active';
  private _holdInteractionTimeout!: number;
  private _holdTimeout!: number;
  private _isMouseHold!: boolean;

  



  constructor(private buttonsTreeService: ButtonsTreeService) {

  }
  ngOnChanges(changes: any) {
    //if (changes.message != null && changes.message.currentValue != null) {
    //  this.ExecuteMyFunction(this.message);
    //}
    //this is to save the length of the shortcut buttons list when We finish to load.
    if (this.node?.nodes?.length) {
      this.length = this.node?.nodes?.length;
      //console.warn("ttttttt:length:" + this.length);
      //console.warn("ttttttt:max_column_number:" + this.max_column_number);
      this.row_number = Math.ceil(this.length / this.max_column_number);
      //console.warn("ttttttt:row_number:" + this.row_number);
      //We need to initialize the Number Of Row list to deal with the for each HTML...
      for (let i = 1; i <= this.row_number; i++) {
        this.number_of_row.push(i);
      }
    }
  }
  ngOnInit() {

  }
  callPapa(event: Event, scb: Node) {
    //this.shortcutButtonsService.sendShortCutButton(scb);
    if (this.isHaveChildrens(scb)) {
      const button = event.target as HTMLButtonElement;
      let children_level_tree = button.getAttribute('data-childrenleveltree');
      
      
      
      var element = document.querySelector('.buttons-board');
      var rootElem = document.querySelector('#buttons-tree-board');
      var childElem = document.querySelector(".buttons-board[data-leveltree='" + children_level_tree + "']");

      //element?.setAttribute('style', 'display:none;');
      this._elementRef?.nativeElement.setAttribute('style', 'display:none;');
      childElem?.setAttribute('style', 'display:block;');
      if(childElem)
        rootElem?.append(childElem);
      
      
      
      // $('.buttons-board').attr('style', 'display:none;');
      // $(".buttons-board[data-leveltree='" + children_level_tree + "']").attr('style', 'display:block;');
      // $(".buttons-board[data-leveltree='" + children_level_tree + "']").detach().appendTo("#buttons-tree-board");

      //this._elementRef?.nativeElement.setAttribute('style','display:none');

    }
    else {
      if (scb.data != undefined)
      {
        //this.shoppingCartService.addingItemToShoppingCart(scb.item);
      }
    }
    
  }
  callBack(event: Event, node: Node | undefined) {
    //this.shortcutButtonsService.sendShortCutButton(scb);
    if (this.isHaveChildrens(node)) {
      //alert('callBack');
      const button = event.target as HTMLButtonElement;
      let papa_level_tree = button.getAttribute('data-leveltree');
      //alert('papa_level_tree:' + papa_level_tree);
      //We need to get the papa node, for that all We need to do is to subtract the last node.
      let papa_level_tree_without_sun = papa_level_tree?.split('.');
      if (papa_level_tree_without_sun != undefined) {
        papa_level_tree = '';
        for (let i = 0; i < papa_level_tree_without_sun.length - 1; i++) {
          papa_level_tree = papa_level_tree + papa_level_tree_without_sun[i];
          if (i < papa_level_tree_without_sun.length - 2)
            papa_level_tree = papa_level_tree + '.'; 
        }
      }
      
      var element = document.querySelector('.buttons-board');
      var rootElem = document.querySelector('#buttons-tree-board');
      var parentElem = document.querySelector(".buttons-board[data-leveltree='" + papa_level_tree + "']");

      //element?.setAttribute('style', 'display:none;');
      this._elementRef?.nativeElement.setAttribute('style', 'display:none;');
      parentElem?.setAttribute('style', 'display:block;');
      if(parentElem)
        rootElem?.append(parentElem);
      
      
      
      
      
      // //alert('papa after cut sun:' + papa_level_tree);
      // $('.buttons-board').attr('style', 'display:none;');
      // //alert('we make all table to be display none');
      // $(".buttons-board[data-leveltree='" + papa_level_tree + "']").attr('style', 'display:block;');
      // //alert('we need to check if We find the parent table and change his style to block');
      // $(".buttons-board[data-leveltree='" + papa_level_tree + "']").detach().appendTo("#buttons-tree-board");

    }
    else {
      alert('not have children');
    }

  }
  spanCallBack(event: Event, node: Node | undefined) {
    //this.shortcutButtonsService.sendShortCutButton(scb);
    if (this.isHaveChildrens(node)) {
      //alert('callBack');
      const button = event.target as HTMLSpanElement;
      let papa_level_tree = button.getAttribute('data-leveltree');
      console.warn('papa_level_tree:' + papa_level_tree);
      //We need to get the papa node, for that all We need to do is to subtract the last node.
      let papa_level_tree_without_sun = papa_level_tree?.split('.');
      if (papa_level_tree_without_sun != undefined) {
        papa_level_tree = '';
        for (let i = 0; i < papa_level_tree_without_sun.length - 1; i++) {
          papa_level_tree = papa_level_tree + papa_level_tree_without_sun[i];
          if (i < papa_level_tree_without_sun.length - 2)
            papa_level_tree = papa_level_tree + '.'; 
        }
      }
      
      var element = document.querySelector('.buttons-board');
      var rootElem = document.querySelector('#buttons-tree-board');
      var parentElem = document.querySelector(".buttons-board[data-leveltree='" + papa_level_tree + "']");

      this._elementRef?.nativeElement.setAttribute('style', 'display:none;');
      parentElem?.setAttribute('style', 'display:block;');
      if(parentElem)
        rootElem?.append(parentElem);
    }
    else {
      alert('not have children');
    }

  }
  public isHaveChildrens(node: Node | undefined) {
    if (node != undefined) {
      if (node.nodes != undefined) {
        if (node.nodes.length > 0) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
    //return this.database.isExpandable(node);
  }
  public getBlockButtons(index: number) {
    let temp_list: Node[] = [];

    /*this.shortcutButtonsData?.buttons?.length*/
    //console.warn("ttttttt:1111111");
    //console.warn("ttttttt:max_column_number:" + this.max_column_number);
    //console.warn("ttttttt:row_number:" + this.row_number);
    //console.warn("ttttttt:((index - 1) * this.row_number):" + ((index - 1) * this.row_number));
    for (let i = ((index - 1) * this.row_number); i < (this.max_column_number + ((index - 1) * this.row_number)); i++) {
      //console.warn("ttttttt:2");
      if (i < this.length) {
        if (this.node?.nodes !== undefined)
          temp_list.push(<Node>this.node.nodes.at(i));

      }
    }
    return temp_list;

  }

  /**
   * Handles button up
   *
   * @param button The button layout name.
   * @param event The button event.
   */
  handleButtonUp( e: Event,scb: Node): void {
    const button = e.target as HTMLButtonElement;
    //console.log('Key up:', scb.data?.itemName);
    if (e) {
      /**
       * Handle event options
       */
      e.preventDefault();
      e.stopPropagation();
    }
    
    var isButtonElement = true;
    if (button instanceof HTMLImageElement) {
      //If we click up on image we want to capture the parent element.
      //because the image element is a child in the button element and if we calling to 
      //'_setActiveButton' with image element we don't and make 'un active' class we don't declare any active class to the image style
      //that the reason we want to get the parent element of this image this his button, to remove active right to the button
      //&.active { ...  
      isButtonElement = false;
      //console.log("The image element triggered the event.");
    } 
    else if (button instanceof HTMLButtonElement) {
      isButtonElement = true;
      //console.log("The button element triggered the event.");
    } 
    else {
      isButtonElement = false;
      //console.log("Another element triggered the event:", button);
    }



    /**
     * Remove active class
     */
    //But before we remove the active button We need to check who is trigger this handle button up event.
    //If this the image event (this element is existent in the button element) so we need to remove the parent active style
    //and not the image active.
    
    if(isButtonElement)
    { 
      this._removeActiveButton(button);
    }
    else
    {
      const parent = button.parentElement as HTMLButtonElement;
      this._removeActiveButton(parent);
    }

    
    this._isMouseHold = false;
    if (this._holdInteractionTimeout)
      clearTimeout(this._holdInteractionTimeout);
  }

/**
   * Handles button down
   *
   * @param button The button layout name.
   * @param event The button event.
   */
handleButtonDown(e: Event,scb: Node): void {
  //console.log('Key down:', scb.data?.itemName);
  const button = e.target as HTMLButtonElement;
  if (e) {
    /**
     * Handle event options
     */
    e.preventDefault();
    e.stopPropagation();
  }

  var isButtonElement = true;
  if (button instanceof HTMLImageElement) {
    //If we click on image we want to capture the parent element.
    //because the image element is a child in the button element and if we calling to 
    //'_setActiveButton' with image element we don't and make 'active' class we don't declare any active class to the image style
    //that the reason we want to get the parent element of this image this his button, to set active right to the button
    //&.active { ...  
    isButtonElement = false;
    //console.log("The image element triggered the event.");
  } 
  else if (button instanceof HTMLButtonElement) {
    isButtonElement = true;
    //console.log("The button element triggered the event.");
  } 
  else {
    isButtonElement = false;
    //console.log("Another element triggered the event:", button);
  }




  /**
   * Add active class
   */
  if(!this.isHaveChildrens(scb))
  { 
    if(isButtonElement)
    { 
      this._setActiveButton(button);
    }
    else
    {
      const parent = button.parentElement as HTMLButtonElement;
      this._setActiveButton(parent);
    }
  }
  if (this._holdInteractionTimeout)
    clearTimeout(this._holdInteractionTimeout);
  if (this._holdTimeout) 
    clearTimeout(this._holdTimeout);
  this._isMouseHold = true;

  /**
   * Time to wait until a key hold is detected
   */
  this._holdTimeout = window.setTimeout(() => {
    if (this._isMouseHold && !this.isHaveChildrens(scb)) 
      {
      this.handleButtonHold(e,scb);
    }
    clearTimeout(this._holdTimeout);
  }, 500);

  /**
   * Handel button Click after button down
   */
     /**
   * Handel button Click after button down
   */
  //!!!! but wait a seconde what happen if we click on <p> element that inside the <button> element so if we calling to
  // this.handleButtonPress(e,scb) with e parameter the handleButtonPress make convert of this e to 'HTMLButtonElement'
  //So if we click on <p> or other element inside the button (<button>... <p></p></button>)
  //We need to get the event of the button so that the reason we getting the parent element that is mean the button
  if(isButtonElement)
  {
    this.handleButtonPress(button,scb);
  }
  else
  {
    const parent = button.parentElement as HTMLButtonElement;
    this.handleButtonPress(parent,scb);
  }
}

 /**
   * Handles button hold
   */
 handleButtonHold(e: Event,scb: Node): void {
  //console.log('Key hold:', scb.data?.itemName);
  if (this._holdInteractionTimeout)
    clearTimeout(this._holdInteractionTimeout);

  /**
   * Timeout dictating the speed of key hold iterations
   */
  this._holdInteractionTimeout = window.setTimeout(() => {
    if (this._isMouseHold) {
      this.handleButtonPress(e.target as HTMLButtonElement,scb);
      this.handleButtonHold(e,scb);
    } else {
      clearTimeout(this._holdInteractionTimeout);
    }
  }, 100);
}


/**
   * Handles clicks made to keyboard buttons
   *
   * @param button The button layout name.
   * @param event The button event.
   */
handleButtonPress(button: HTMLButtonElement,scb: Node): void {
  this.buttonsTreeService.buttonClicked(scb);
  if (this.isHaveChildrens(scb)) {
    let children_level_tree = button.getAttribute('data-childrenleveltree');
    
        
    var element = document.querySelector('.buttons-board');
    var rootElem = document.querySelector('#buttons-tree-board');
    var childElem = document.querySelector(".buttons-board[data-leveltree='" + children_level_tree + "']");

    this._elementRef?.nativeElement.setAttribute('style', 'display:none;');
    childElem?.setAttribute('style', 'display:block;');
    if(childElem)
      rootElem?.append(childElem);
  }
  else {
    if (scb.data != undefined)
    {
      this.buttonsTreeService.barrenButtonClicked(scb);
    }
  }  
}
// handleButtonPress(event: Event,scb: Node): void {
//   this.buttonsTreeService.buttonClicked(scb);
//   if (this.isHaveChildrens(scb)) {
//     const button = event.target as HTMLButtonElement;
//     let children_level_tree = button.getAttribute('data-childrenleveltree');
    
    
    
//     var element = document.querySelector('.buttons-board');
//     var rootElem = document.querySelector('#buttons-tree-board');
//     var childElem = document.querySelector(".buttons-board[data-leveltree='" + children_level_tree + "']");

//     this._elementRef?.nativeElement.setAttribute('style', 'display:none;');
//     childElem?.setAttribute('style', 'display:block;');
//     if(childElem)
//       rootElem?.append(childElem);
//   }
//   else {
//     if (scb.data != undefined)
//     {
//       this.buttonsTreeService.barrenButtonClicked(scb);
//     }
//   }  
// }



/**
   * Set active class in button
   *
   * @param buttonName
   */
private _setActiveButton(buttonName: HTMLButtonElement): void {
  buttonName.classList.add(this._activeButtonClass);
}

/**
 * Remove active button
 *
 * @param buttonName
 */
private _removeActiveButton(buttonName?: HTMLButtonElement): void {
  //console.log('_removeActiveButton0:', buttonName);
  if (buttonName) {
    //console.log('_removeActiveButton:', buttonName);
    if (buttonName && buttonName.classList) {
      //console.log('_removeActiveButton+:', buttonName);
      buttonName.classList.remove(this._activeButtonClass);
    }
  } 
}


}