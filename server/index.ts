// Simple static file server for the converted static site
import { spawn } from 'child_process';
import path from 'path';

console.log('Starting static site server...');

// Since this was converted to a static site, we'll run Vite directly
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: path.resolve(process.cwd()),
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  console.log(`Vite server exited with code ${code}`);
  process.exit(code || 0);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Shutting down server...');
  viteProcess.kill('SIGTERM');
});