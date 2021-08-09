import { FileCommandsService } from '../services/fileCommandsService';

export const fileCommands = ['pwd', 'cd', 'ls', 'cp', 'mv', 'rm', 'mkdir', 'rmdir', 'chmod'];

export const fileCommandsController = (firstCommand: string, restCommands: string[]): string => {
  switch (firstCommand) {
    case 'mkdir':
      return FileCommandsService.mkdir(restCommands);
    default:
      return '';
  }
};
