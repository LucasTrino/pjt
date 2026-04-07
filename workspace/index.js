import fs from 'fs';

import directoriesHandler from "../directoriesHandler/index.js"
import directories from "../workspace/directories.json" with { type: 'json' };

function open(name) {
  for (let i = 0; name.length > i; i++) {
    const key = name[i];
    const value = directories[key];

    directoriesHandler.open(value);
  }
}

function add(path, options) {
  const counter = Object.keys(directories).length;
  const key = options.name ?
    options.name :
    `dir-${counter}`;
  const filePath = "./workspace/directories.json";

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      return;
    }

    directories[key] = path;

    fs.writeFile(filePath, JSON.stringify(directories, null, 2), (err) => {
      if (!err) {
        console.log(`Novo diretório '${key}' adicionado com sucesso!`);
        return
      }

      console.error('Erro ao escrever no arquivo JSON:', err);
    });
  });
}

function deleteDir(name) {
  const filePath = "./workspace/directories.json";

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      return;
    }

    delete directories[name];

    fs.writeFile(filePath, JSON.stringify(directories, null, 2), (err) => {
      if (!err) {
        console.log(`Diretório '${name}' deletado com sucesso!`);
        return
      }

      console.error('Erro ao escrever no arquivo JSON:', err);
    });
  });
}

function list() {
  for (const dir in directories) {
    console.log(`${dir} - ${directories[dir]}`)
  }
}

function getPath(name) {
  const path = directories[name];

  const message = !!path ?
    path :
    'Diretório não encontrado'

  console.log(message);
}

export default {
  open,
  add,
  deleteDir,
  list,
  getPath
}