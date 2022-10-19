import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import manifest from '../manifest.json';
import { rickCommands } from './commands';

const RickAstley: Plugin = {
   ...manifest,

   onStart() {
      this.commands = rickCommands;
   },

   onStop() {
      this.commands = [];
   }
};

registerPlugin(RickAstley);
