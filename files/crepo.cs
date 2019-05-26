/*
#menu-tree {
     position: absolute;
     top: 0;
     bottom: 0;
}

.menu-tree-container {
  width:250px;
  height:200px;
  overflow-y: scroll;
  border: 1px solid black;
  padding: 10px 10px;
  position:relative;
}
*/

/*** END OPTIONAL styling for box that contains the list ***/



.menu-tree {
  /* display:none; Replaced with document.write in HEAD tags. */
}

.exp {
    cursor: pointer;
}

.menu-tree ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.menu-tree li li {
    /*background-image: url(page.png);
    background-position: 0 1px;
    background-repeat: no-repeat;*/
    padding-left: 20px;
}
.menu-tree li.folder {
}

.menu-tree span {
  background: transparent url(arrow-left.png) no-repeat left top;
  background-position: -4px -4px;
  background-size: 16px 16px;
  padding: 0px 0 0px 21px;
  display: block;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
}

.menu-tree span.expanded {
  background: transparent url(arrow-down.png) no-repeat left top;
  background-size: 16px 16px;
  background-position: -4px -4px;
}

.menu-tree span:hover {
  text-decoration: underline;
  background-color:#ccc;
}


/************************/

.page {
    /*width: 100%;*/
   display: flex;
}

.column {
    width: 40%;
    height: 100%;
    overflow: auto;
    float: left;
}

.mainpane {
    float: left;
    width: 60%;
    height: 100%;
    overflow: auto;
}

/* https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space */
.detail {
    float: left;
    width: 40%;
    height: 100%;

    display: flex;
    flex-flow: column;
    /*overflow: auto;*/
}

.detailfloatinfo {
    float: left;
    flex: 0 1 50%;
    overflow: auto;
}

.detailfileview {
    float: left;
    flex: 1 1 auto;
    /*height: 100%;*/
    overflow: auto;
}


.fileview {
    margin-top: 100px;
    width: 100%;
}

.detailfileview {
    margin-top: 2px;
}

.floatinfo {
    float: left;
    display: table;
    position:absolute;
    top: 0px;
    background-color:#ffffff;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.exp {
    clear:both;
    display: block;
}

.expleft {
    clear:both;
}

/************************/

span.code {
    white-space: pre;
    font-family: monospace;
    margin: 0;
}

span.assign {
    white-space: pre;
    font-family: monospace;
    margin: 0;
    display: block;
}

pre {
    margin: 0;
}

/************************/

.menu-tree span.diffremain {
}

.menu-tree span.diffremainchanged {
    background-color: lightgrey;
}

.menu-tree span.diffnew {
    background-color: lightgreen;
}

.menu-tree span.diffremoved {
    background-color: red;
}




span.diffadd {
    background-color: #eeffee;
}

span.diffdel {
    background-color: #ffeeee;
}

span.diffpossrc {
    background-color: #eeeeee;
}
span.diffpos {
    background-color: #eeeeee;
}
span.diffposdst {
    background-color: #eeeeee;
}


span.diffline {
    display: block;
    white-space: pre;
    font-family: monospace;
    margin: 0;
}