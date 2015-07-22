gfk:autoform-textcomplete
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "textcomplete", which renders an input using the [select2](https://select2.github.io/) plugin.


## Installation

In a Meteor app directory, enter:

```bash
$ meteor add gfk:autoform-textcomplete
```

## Usage

Specify "textcomplete" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  tags: {
    type: [String],
    autoform: {
      type: "textcomplete",
      afFieldInput: {
          textcompleteStrategies: [
              {
                  // strategy
              }
          ],
          textCompleteOptions: {
              // options
          }
      }
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```html
{{> afQuickField name="tags" type="textcomplete" textcompleteStrategies=textcompleteStrategies textCompleteOptions=textCompleteOptions}}

{{> afFormGroup name="tags" type="textcomplete" textcompleteStrategies=textcompleteStrategies textCompleteOptions=textCompleteOptions}}

{{> afFieldInput name="tags" type="textcomplete" textcompleteStrategies=textcompleteStrategies textCompleteOptions=textCompleteOptions}}
```
### Attaching custom events to the textcomplete
You can add custom events to the textComplete by adding a customEvents object to the attributes. The events will be added when the textComplete finishes rendering.
```js
{
  tags: {
    type: [String],
    autoform: {
      type: "textcomplete",
      afFieldInput: {
          textcompleteStrategies: [
              {
                  // strategy
              }
          ],
          textCompleteOptions: {
              // options
          },
          customEvents: {
            'textComplete:select': answerSelectHandler.bind(Template.instance())
          },
      }
    }
  }
}
```
