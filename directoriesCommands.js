import fs from 'fs';
import { exec } from 'child_process';

function open(dir) {
  process.chdir(`${dir}`);

  try {
    exec('start .', (err, stdout, stderr) => {

      console.log('📂 Diretório atual:', process.cwd());

      if (err) {
        console.error('Erro ao abrir o diretório:', err);
        return;
      }

      console.log('Abrindo diretório no explorador...');
    });

  } catch (err) {
    console.error('Erro ao mudar de diretório:', err);
  }
}

const addDirectory = (key, value) => {
  const filePath = "./workspace.json";

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      return;
    }

    const directories = JSON.parse(data);

    directories[key] = value;

    fs.writeFile(filePath, JSON.stringify(directories, null, 2), (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo JSON:', err);
      } else {
        console.log(`Novo diretório '${key}' adicionado com sucesso!`);
      }
    });
  });
};

export default {
  open,
  addDirectory
}