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


export default {
  open,
}