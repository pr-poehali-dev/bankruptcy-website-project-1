import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactDialogProps {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  formData: {
    name: string;
    phone: string;
    debt_amount: string;
    comment: string;
  };
  isSubmitting: boolean;
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactDialog = ({ 
  dialogOpen, 
  setDialogOpen, 
  formData, 
  isSubmitting, 
  onFormChange, 
  onSubmit 
}: ContactDialogProps) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient flex items-center gap-2">
            <Icon name="Phone" size={24} />
            Бесплатная консультация
          </DialogTitle>
          <DialogDescription>
            Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Ваше имя *</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => onFormChange('name', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Введите ваше имя"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Телефон *</label>
            <input 
              type="tel" 
              required
              value={formData.phone}
              onChange={(e) => onFormChange('phone', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Сумма долга (необязательно)</label>
            <input 
              type="text"
              value={formData.debt_amount}
              onChange={(e) => onFormChange('debt_amount', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Примерная сумма"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
            <textarea 
              value={formData.comment}
              onChange={(e) => onFormChange('comment', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Опишите вашу ситуацию"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full gradient-primary hover:opacity-90 transition-opacity"
          >
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
