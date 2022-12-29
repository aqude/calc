import '../calc.css'

const Calculator = () => {

    return (
        <div className='panel'>
            <div className='panel-child'>
                <div className='display'>0</div>
                <div className='buttons'>
                    <button className='button'>C</button>
                    <button className='button'>()</button>
                    <button className='button'>%</button>
                    <button className='button button__orange'>/</button>
                    <button className='button'>7</button>
                    <button className='button'>8</button>
                    <button className='button'>9</button>
                    <button className='button button__orange'>*</button>
                    <button className='button'>4</button>
                    <button className='button'>5</button>
                    <button className='button'>6</button>
                    <button className='button button__orange'>-</button>
                    <button className='button'>1</button>
                    <button className='button'>2</button>
                    <button className='button'>3</button>
                    <button className='button button__orange'>+</button>
                    <button className='button button__big'>0</button>
                    <button className='button'>.</button>
                    <button className='button button__orange'>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;