# Convert Atom Snippets To Vscode
A tiny package that help you convert atom snippets to vscode format.

## Introduction
I used to use Atom as my editor,but now vscode is my favourite.But i also have some useful snippets on my Atom that i don't want to lose theme.So i spent some time write this small package to help you convert Atom snippets to vscode format.Hope you enjoy it :)

## Installationfeat
    $ npm install convert-atom-snippets-to-vscode -g
or

    $ yarn global add convert-atom-snippets-to-vscode

## Usage
### Command 
    convertSnippets <snippets> [output] -c, --combine
### snippets 
Atom snippets path,absolute or relative path,dir.e.g: `~/snippets`, `D:\someAtomSnippet.cson`,  `./snippets/fooSnippets.cson`
### output 
Target dir to save converted snippets.Absolute or relative path is both well.e.g:`./snippets`, `D:\snippets`
### combine
Whether to combine all snippets to single snippet file.
### notice
The relative path will relative to the path you run the command.

## Test
    $ yarn test

## Issues
Any problems,please submit a issue.PR is also welcome.
