import mjml2html from 'mjml';
import fs from 'fs';
import path from 'path';


export enum EmailTemplate {
  ConfirmationSingle = 'ConfirmationSingle',
}

export type TemplateVariables = {
  [EmailTemplate.ConfirmationSingle]: {
    firstName: string;
    uuid: string;
  };
};

export const renderMJML = <T extends EmailTemplate>(
  templateName: T,
  variables: TemplateVariables[T]
): string => {
  const filePath: string = path.resolve('src/lib/email-templates/', `${templateName}.mjml`);
  let template: string;
  try {
    template = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    throw new Error(`Failed to read template file: ${filePath}`);
  }
  for (const [key, value] of Object.entries(variables)) {
    const variableRegex = new RegExp(`{{${key}}}`, 'g');
    template = template.replace(variableRegex, value);
  }
  const { html, errors } = mjml2html(template);
  if (errors && errors.length > 0) {
    console.error('MJML Rendering Errors:', errors);
    throw new Error('Failed to render MJML template due to errors.');
  }
  return html;
};
