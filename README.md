# Angular Lab - Grocery List App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Installation
Make Sure you have the Angula CLI installed.

**BEFORE YOU INSTALL:** please read the make sure you have the following prerequisites:
 Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together
 with NPM 3 or higher.

```bash
npm install -g @angular/cli
```

## Create a new Angular project

```bash
ng new PROJECT-NAME
cd PROJECT-NAME
```

## Development server

Run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**Now you are ready to start coding!**

## The Application:
In This Lab you will be building a simple Grocery list application.
In the App you will be able To Create a new list, add items and mark items as bought.

### Step 1 - Components Data Binding & Directive:
In The First step you will create the application inside a single component.
The application is made of 2 panels.

* Grocery List Panel 
  * this panel contains a form with a single input element that allows entering a new list name 
     and an add button.
    
  * clicking on the button, creates a new list with the entered name and an empty array of items.
  
  * Below the form should be list of all the created list displaying their name and number of items it contains.

* Edit List Panel
  * This Panel is displayed once a list from the above panel is selected by clicking on it.
  * This panel will contain a simple form with:
    * A Input element holding the selected list name.
    changing the value of this input and pressing enter will change the list name. which should refelect on the list panel display also
    * An Input element for adding items to the list.
    Entering a name and pressing enter will add a new item to the items list of the selected list.
  * A list of the selected list item, displaying the item title and a checkbox for checking if the item was bought or not.
    * when checking the check box the name should stirked through.

### Step 2 - Component Composition

In this step you are required to split your single component into components and add inputs and outputs for every component.


  
  
   
  
