import { program } from "commander";

import workspace from "./workspace/index.js";
import directoriesHandler from "./directoriesHandler/index.js "

function init() {
  program
    .name('wkSp')
    .description('Just a CLI test')
    .version('1.0.0');

  program.command('open')
    .option('-d, --dir <name...>', 'Abrir diretório')
    .action((name) => {
      workspace.open(name.dir)
    });

  program.command('add')
    .argument('<path>', 'Caminho diretório')
    .option('-n, --name <value>', 'Nome do diretório ao Workspace')
    .action((path, options) => {
      workspace.add(path, options)
    })

  program.command('delete')
    .argument('<name>', 'Nome diretório')
    .action((name) => {
      workspace.deleteDir(name)
    })

  program.command('list')
    .action(() => {
      const dirs = workspace.getDirs()

      for (const dir in dirs) {
        console.log(`${dir} - ${dirs[dir]}`)
      }
    })

  program.command('getPath')
    .argument('<name>', 'Nome diretório')
    .action((name) => {
      const message =
        workspace.getPath(name) !== null ?
          workspace.getPath(name) :
          'Diretório não encontrado';

      console.log(message)
    })

  program.command('navigateTo')
    .argument('<name>', 'Nome diretório')
    .action((name) => {
      const path = workspace.getPath(name);

      if (path !== null) {
        directoriesHandler.navigateTo(path);
        console.log(`Diretório atual - ${path}`)

        return;
      }

      console.log('Diretório não encontrado.')
    })

  program.parse(process.argv);
}

export default {
  init,
};




