type Languages = 'en' | 'pt';
export type TranslationKeys =
  | 'REQUIRED'
  | 'INVALID_EMAIL'
  | 'MIN_LENGTH'
  | 'PASSWORDS_NOT_MATCH'
  | 'BUTTON_SIGN_IN'
  | 'BUTTON_SIGN_UP'
  | 'BUTTON_FORGOT_PASSWORD'
  | 'LABEL_PASSWORD'
  | 'LABEL_CONFIRM_PASSWORD'
  | 'LABEL_NAME'
  | 'OR'
  | 'SIGN_IN'
  | 'SIGN_UP';

export const translations: Record<Languages, Record<TranslationKeys, string>> = {
  en: {
    //hint error messages
    REQUIRED: 'This field is required.',
    INVALID_EMAIL: 'Please enter a valid email address.',
    MIN_LENGTH: 'The field must have at least 6 characters.',
    PASSWORDS_NOT_MATCH: 'Passwords do not match. Please check again.',

    //buttons
    BUTTON_SIGN_IN: 'Sign in',
    BUTTON_SIGN_UP: 'Sign up',
    BUTTON_FORGOT_PASSWORD: 'Forgot your password?',

    //labels
    LABEL_PASSWORD: 'Password',
    LABEL_CONFIRM_PASSWORD: 'Confirm password',
    LABEL_NAME: 'Name',

    //Other translations
    OR: 'or',
    SIGN_IN: 'Sign in',
    SIGN_UP: 'Sign up',
  },

  pt: {
    //hint error messages
    REQUIRED: 'Este campo é obrigatório.',
    INVALID_EMAIL: 'Por favor, insira um endereço de e-mail válido.',
    MIN_LENGTH: 'O campo deve ter no mínimo 6 caracteres.',
    PASSWORDS_NOT_MATCH: 'As senhas não conferem. Por favor, verifique novamente.',

    //buttons
    BUTTON_SIGN_IN: 'Login',
    BUTTON_SIGN_UP: 'Cadastrar',
    BUTTON_FORGOT_PASSWORD: 'Esqueceu sua senha?',

    //labels
    LABEL_PASSWORD: 'Senha',
    LABEL_CONFIRM_PASSWORD: 'Confirme a senha',
    LABEL_NAME: 'Nome',

    //Other translations
    OR: 'ou',
    SIGN_IN: 'Entrar',
    SIGN_UP: 'Cadastrar',
  },
};
