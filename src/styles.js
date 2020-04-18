

export function defaultStyles() {
    return {
        container: {
            display: 'block',
            filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.2))'
        },
        slider: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            position: 'relative',
            transition: 'all .1s ease-in'
        },
        loader: {
            height: '100%',
            borderRadius: '0 5px 5px 0',
        },
        drop: {
            position: 'relative',
            display: 'inline-block',
            gridGap: 0,
            padding: 0,
            transition: 'all .1s ease-in-out',
            transformOrigin: 'top', 
            width: '100%', 
        },
        dropContainer: {
            display: 'inline-block', 
            position: 'relative', 
            padding: 0, 
            margin: 0
        },
        text: {
            textAlign: 'center', 
            fontSize: 'min(70%, 20px)' 
        },
        textContainer: {
            width: '100%', 
            height: '100%', 
            top: 0, 
            left: 0, 
            transform: 'translateY(-100%)'
        }
    }
}