import {animation,style,animate,trigger,transition,useAnimation,state} from '@angular/animations'


export const fadeIn = animation([
  style({opacity:0}),
  animate("1500ms",style({opacity:1}))
]);

// export const fadeIn = animation([
//   style({opacity:0}),
//   animate("1500ms",style({height:'500px',opacity:1}))
// ]);

export const fadeOut = animation([
  animate("1500ms",style({opacity:0}))
]);

export const fadeInOut = trigger('fadeInOut',[
transition('void => *',useAnimation(fadeIn)),
transition('* => void',useAnimation(fadeOut)),
]);


export const toggleState = trigger('toggleState', [
      state('show',
        style({
          display: 'block',
          opacity: 1
        })
      ),
      state('hide',
        style({
          display: 'none',
          opacity: 0
        })
      )
    ])

;



