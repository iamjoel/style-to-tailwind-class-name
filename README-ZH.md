# Algorithm

## 1 ignore some rules
background

## 2 combined style to atom style

margin: 8px 4px => my-2 mx-1
margin: 8px 4px 12px => my-1 ml-2 mb-3
margin: 4px 8px 12px 16px => mt-1 mb-3 ml-4 mr-2

border: 1px solid #000 => border border-black

font: 12px => text-xs


## 3 atom style to class name

## 4 css name order rule
from outer to inner, from vertical to horizontal, from top left to right bottom, from important to unimportant
* absolute; z-index; top; bottom; left; right;
* margin: top;bottom;left;
* border
* box-shadow
* display
* flex: items-center; justify-center;
* padding
* font-size, font-weight, color, hover: color
* children space: space-y


