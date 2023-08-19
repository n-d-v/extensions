(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Pop-Up Message extension must run unsandboxed');
  }

  class AlertMessageExtension {
    getInfo() {
      return {
        id: 'alertmessageextension',
        name: 'Pop-up Message',
        blocks: [
          {
            opcode: 'alertmessage',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Show pop-up message with the text [textinput]',
            arguments: {
              textinput: {
                type: Scratch.ArgumentType.STRING
              }
            }
          }
        ]
      };
    }

    alertmessage(args) {
      alert(args.textinput)
    }
  }

  Scratch.extensions.register(new AlertMessageExtension());
})(Scratch);
