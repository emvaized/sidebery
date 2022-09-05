import { Settings } from 'src/services/settings'
import { Styles } from 'src/services/styles'


function main() {
    const availableHash = window.location.hash.slice(1);
    const input = document.getElementById('titleInput') as HTMLInputElement;

    /// set note and input value from stored url hash
    if (availableHash) {
        if (input) input.innerHTML = decodeURIComponent(availableHash);
        document.title = decodeURIComponent(availableHash).replace(/<[^>]*>?/gm, '');;
    }

    /// add listener to input and focus
    if (input) {
        input.addEventListener('input', onTitleChange as (e: Event) => void)
        input.focus();
    }

    /// add button listeners
    document.getElementById('bold')?.addEventListener('click', () => document.execCommand('bold'))
    document.getElementById('italic')?.addEventListener('click', () => document.execCommand('italic'))
    document.getElementById('underline')?.addEventListener('click', () => document.execCommand('underline'))
    document.getElementById('strikethrough')?.addEventListener('click', () => document.execCommand('strikethrough'))

    document.getElementById('h1')?.addEventListener('click', () => document.execCommand('formatBlock', false, '<h1>'))
    document.getElementById('h2')?.addEventListener('click', () => document.execCommand('formatBlock', false, '<h2>'))
    document.getElementById('h3')?.addEventListener('click', () => document.execCommand('formatBlock', false, '<h3>'))
    document.getElementById('h4')?.addEventListener('click', () => document.execCommand('formatBlock', false, '<h4>'))
    document.getElementById('h5')?.addEventListener('click', () => document.execCommand('formatBlock', false, '<h5>'))
    document.getElementById('p')?.addEventListener('click', () => document.execCommand('formatBlock', false, '<p>'))

    // document.getElementById('copy')?.addEventListener('click', () => {
    //     document.getElementById('titleInput')?.focus();
    //     document.execCommand('selectAll');
    //     document.execCommand('copy');
    // })
}

function onTitleChange(e: DOMEvent<Event, HTMLInputElement>): void {
    // document.title = e.target.value.trim();
    // window.location.hash = '#' + e.target.value.trim();

    const value = document.getElementById('titleInput')?.innerHTML;
    if (!value) return;
    document.title = value.trim().replace(/<[^>]*>?/gm, '');
    window.location.hash = '#' + value.trim();
}

main()