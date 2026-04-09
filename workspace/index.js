import fs from 'fs';

import directoriesHandler from "../directoriesHandler/index.js"
import directories from "../workspace/directories.json" with { type: 'json' };

function open(name = null) {
  if (typeof name === 'undefined' || name === null)
    directoriesHandler.open();

  if (typeof name === 'string')
    directoriesHandler.open(value);

  if (Array.isArray(name)) {
    for (let i = 0; name.length > i; i++) {
      const key = name[i];
      const value = directories[key];

      directoriesHandler.open(value);
    }
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

    directories[key].path = path;

    fs.writeFile(filePath, JSON.stringify(directories, null, 2), (err) => {
      if (!err) {
        console.log(`Novo diretório '${key}' adicionado com sucesso!`);
        return
      }

      console.error('Erro ao escrever no arquivo JSON:', err);
    });
  });
}

function deleteDiretories(name) {
  const filePath = "./workspace/directories.json";

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      return false;
    }

    delete directories[name];

    fs.writeFile(filePath, JSON.stringify(directories, null, 2), (err) => {
      if (!err) {
        console.log(`Diretório '${name}' deletado com sucesso!`);
        return true;
      }

      console.error('Erro ao escrever no arquivo JSON:', err);
      return false;
    });
  });
}

function getDiretories() {
  return Object.keys(directories);
}

function getPath(name) {
  const path = directories[name].path;

  const value = !!path ?
    path :
    null

  return value;
}

function exists(name) {
  const directoriesKey = Object.keys(directories);
  return directoriesKey.includes(name);
}

export default {
  open,
  add,
  deleteDiretories,
  getDiretories,
  getPath,
  exists
}