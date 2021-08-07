import Masker from 'vanilla-masker';

const checkInvalid = (numberParam: string) => {
  const cpf = numberParam.toString();
  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }

  return true;
};

const checkCPFDV = (numberParam: string, dv: string) => {
  const check = numberParam
    .split('')
    .map((item: any, i) => {
      const res = item * (numberParam.length + 1 - i);

      return res;
    })
    .reduce((x, y) => x + y);
  let result = 11 - (check % 11);
  if (result === 10 || result === 11) {
    result = 0;
  }

  return result.toString() === dv;
};

export const isCpf = (cpf: string) => {
  if (!cpf) {
    return false;
  }
  const configuredCpf = cpf.replace(/\D/g, '');
  if (checkInvalid(configuredCpf)) {
    const numberValue = configuredCpf.toString().slice(0, -2);
    const dv1 = configuredCpf.toString()[9];
    const dv2 = configuredCpf.toString()[10];
    if (checkCPFDV(numberValue, dv1) && checkCPFDV(numberValue + dv1, dv2)) {
      return true;
    }

    return false;
  }

  return false;
};

export const maskPhone = (value: string = '') =>
  value ? Masker.toPattern(value, '(99) 99999-9999') : '';

export const maskCpf = (value: string) =>
  value ? Masker.toPattern(value, '999.999.999-99') : '';

export const unmaskField = (value: any) =>
  value ? value.replace(/\D/g, '') : '';

export const maskCnpj = (value: string) =>
  value ? Masker.toPattern(value, '99.999.999/9999-99') : '';

export const maskDate = (value: string | null | undefined) =>
  value ? Masker.toPattern(value, '99/99/9999') : '';

export const maskTime = (value: string | null | undefined) =>
  value ? Masker.toPattern(value, '99:99') : '';

export const maskDateTime = (value: string) =>
  value ? Masker.toPattern(value, '99/99/9999 99:99') : '';

export const maskCpfOrCnpj = (value: string) =>
  isCpf(value) ? maskCpf(value) : maskCnpj(value);

export const maskExpirationDate = (value: string) =>
  value ? Masker.toPattern(value, '99/9999') : '';

export const maskCreditCard = (value: string) =>
  value ? Masker.toPattern(value, '9999 9999 9999 9999') : '';
