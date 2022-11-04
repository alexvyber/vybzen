import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

// --

const className =
  "relative py-2 sm:py-8 md:py-12 lg:py-20 xl:py-32 xs:py-4 2xs:py-6";

const classes = cva(className, {
  variants: {},
  defaultVariants: {},
});

// --

interface Props extends VariantProps<typeof classes> {
  title?: string;
}

export default function Divider({ title }: Props) {
  return (
    <div className={classes({})}>
      <div
        className="absolute inset-0 flex items-center"
        aria-hidden="true"
      >
        <div className="w-full border-t border-gray-300" />
      </div>
      {title && (
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-lg font-medium text-gray-900">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
