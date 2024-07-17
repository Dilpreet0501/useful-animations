
# Useful-Animations

Useful-Animations is a package that contains all the necessary animations required by a user. It covers different types of loaders, buttons, and scroll watchers, etc.

## Table of Contents
1. [scroll-watcher](#scroll-watcher)
2. [button wiggle](#button-wiggle)
3. [Pacman](#pacman)
4. [Never ending box](#never-ending-box)
5. [three dots loader](#three-dots-loader)
6. [Spinner](#spinner)
7. [Double Square loader](#double-square-loader)
8. [Single Square loader](#single-square-loader)
9. [Simple Spinner](#simple-spinner)
## Installation
To install the package, use the command:
```bash
npm i useful-animations
```

## How to Import
The best way to import components of Useful-Animations is through direct import of the modules. 

```javascript
import {Watcher,Spinner, Square, Pacman, SquareLoader,ThreedotLoader, Endbox, Wiggle, SimpleSpinner } from 'useful-animations';
```
Example to import components are as follows:

## Scroll-Watcher


```javascript
import {Watcher} from 'useful-animations'
const App=()=>{
  return(
 <>
 <Watcher pathcolor='yellow'/> //pathcolor is for defining color in horizontal scroll
 </>
  )

}
export default App
```

## Button-Wiggle

```javascript
import {Wiggle} from 'useful-animations'
const App=()=>{
  return(
 <>
 <Wiggle backgroundcolor='black' fontcolor='white'/> // backgroundcolor defines background color of button and fontcolor defines color of text inside button     
 </>
  )

}
export default App
```
## Pacman

```javascript
import {Pacman} from 'useful-animations'
const App=()=>{
  return(
 <>
 <Pacman bordercolor='yellow' pathcolor='white'/> // bordercolor defines color of pacman and pathcolor defines color of eating path     
 </>
  )

}
export default App
```
## Never-Ending-Box

```javascript
import {Endbox} from 'useful-animations'
const App=()=>{
  return(
 <>
 <Endbox bordercolor='black'/> // bordercolor defines border-color of loader
 </>
  )

}
export default App
```

## Three-Dots-loader

```javascript
import {ThreedotLoader} from 'useful-animations'
const App=()=>{
  return(
 <>
 <ThreedotLoader loadercolor='black'/> // loadercolor defines border-color of loader
 </>
  )

}
export default App
```

## Spinner

```javascript
import {Spinner} from 'useful-animations'
const App=()=>{
  return(
 <>
 <Spinner/>
 </>
  )

}
export default App
```

## Double-Square-Loader

```javascript
import {SquareLoader} from 'useful-animations'
const App=()=>{
  return(
 <>
 <SquareLoader loadcolor='black' size='3vmin'/> // loadcolor defines color of loader and size defines its size
 </>
  )

}
export default App
```

## Single-Square-Loader

```javascript
import {Square} from 'useful-animations'
const App=()=>{
  return(
 <>
 <Square loadcolor='black' size='3vmin'/> // loadcolor defines color of loader and size defines its size
 </>
  )

}
export default App
```

## Simple-Spinner


```javascript
import {SimpleSpinner} from 'useful-animations'
const App=()=>{
  return(
 <>
 <SimpleSpinner bordercolor='#fcd779' bordertop='white' /> 
 </>
  )

}
export default App
```
