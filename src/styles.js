

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
        },
        card: {
            display: 'block',
            zIndex: 900, 
            borderBottom: '1px solid hsl(0, 0%, 90%)', 
            borderLeft: '1px solid hsl(0, 0%, 90%)', 
            borderRight: '1px solid hsl(0, 0%, 90%)', 
            borderRadius: '0 0 10px 10px',
            position: 'absolute',
            boxShadow: '0px 1px 2px 0px hsl(0, 0%, 90%)',
            overflowY: 'hidden', 
            fontSize: '0.9em', 
            transition: 'height 0.5s ease-in-out'
        },
        cardFlex: {
            display: 'flex', 
            flexDirection: 'column', 
            backgroundColor: 'hsl(0, 0%, 90%)', 
            borderRadius: '0 0 10px 10px',
        },
        cardTodo: {
            color: 'hsl(0, 0%, 60%)',
            position: 'relative'
        },
        cardUl: {
            margin: 0, 
            listStyle: 'none', 
            padding: 0
        },
        cardWave: {
            margin: 0, 
            padding: 0, 
            height: 20
        },
        cardDone: {
            borderRadius: '0 0 10px 10px',
            paddingBottom: 10
        }
    }
}