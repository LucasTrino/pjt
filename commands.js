import { program } from "commander";
import dirOp from "./directoriesCommands.js"
import directories from "./workspace.json" with { type: 'json' };

function init() {
  program
    .name('pjt')
    .description('Just a CLI test')
    .version('1.0.0');

  program.command('open')
    .option('-d, --dir <name...>', 'Abrir diretório de "name"')
    .action((name, options) => {

      for (let i = 0; name.dir.length > i; i++) {
        const key = name.dir[i];
        const value = directories[key];

        dirOp.open(value);
      }


    });

  program.command('add')
    .argument('<path>', 'Caminho diretório')
    .option('-n, --name <value>', 'Nome do diretório ao Workspace')
    .action((path, options) => {
      const counter = Object.keys(directories).lenght;
      const key = options.name ?
        options.name :
        `${key}-${counter}`;

      dirOp.addDirectory(key, path);
    })

  program.parse(process.argv);
}

export default {
  init,
};




