import React from 'react';
import {Link} from 'react-router-dom';
import {AnimationLottie} from '../../Components/AnimationLottie/AnimationLottie';
import Girl from '../../assets/girl.json';
import {Input} from '../../Components/Input/Input';
import {Button} from '../../Components/Button/Button';
import { FacebookRounded } from '@mui/icons-material';

export const Login = () => {
  return (
    <>
    <header>
      <AnimationLottie width={398} height={305} animation={Girl}/>
    </header>
    <main>
      <form>
      <div>
        <Input />
        <Input />
      </div>
      <Button>Entrar</Button>
      </form>
      <Link to='/cadastro'>Ou Cadastre-se</Link>
      <div>
        <FacebookRounded />
      </div>
    </main>
    </>
  );
}