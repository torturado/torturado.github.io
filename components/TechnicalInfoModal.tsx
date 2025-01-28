import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface TechnicalInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TechnicalInfoModal({ isOpen, onClose }: TechnicalInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Technical Information</DialogTitle>
          <DialogDescription>
            Detailed explanation of the calculation process and implementation details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-tigers_eye">Implementation Details</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>BigNumber.js Library:</strong> Used for precise decimal arithmetic, essential for
              handling large numbers and maintaining accuracy in financial calculations.
            </li>
            <li>
              <strong>Natural Logarithm (ln):</strong> Custom implementation using Taylor series for
              accurate calculations with large numbers, particularly useful in compound interest
              scenarios.
            </li>
            <li>
              <strong>Exponential Function (exp):</strong> Implemented using a Taylor series expansion,
              this function allows the calculation of exponents for any real number.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-tigers_eye">Calculation Process</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>User Input Conversion:</strong> All user inputs are converted to BigNumber
              objects, ensuring precise calculations.
            </li>
            <li>
              <strong>Daily Interest Rate Application:</strong> The daily interest rate is applied to
              the current gem balance using the compound interest formula.
            </li>
          </ol>
        </div>
      </DialogContent>
    </Dialog>
  )
}
    
    