
import './SelectMenu.css'

function SelectMenu(props) {
    return (
        <div>
            <select className='select'>
                <option value="">RU</option>
                <option value="">AM</option>
                <option value="">US</option>
            </select>
        </div>
    );
}

export default SelectMenu;