import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Cake, 
  Plus, 
  LogOut, 
  Menu, 
  X,
  Pencil,
  Trash2,
  Home
} from 'lucide-react';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { useCakes } from '@/contexts/CakeContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Cake as CakeType } from '@/components/CakeCard';

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, logout } = useAdminAuth();
  const { cakes, addCake, updateCake, deleteCake } = useCakes();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState<CakeType | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  });

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
    navigate('/admin');
  };

  const resetForm = () => {
    setFormData({ name: '', price: '', image: '', description: '' });
  };

  const handleAddCake = () => {
    if (!formData.name || !formData.price || !formData.image) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    addCake({
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
      description: formData.description || undefined
    });

    toast({
      title: 'Cake added!',
      description: `${formData.name} has been added to the catalogue.`,
    });

    setIsAddModalOpen(false);
    resetForm();
  };

  const handleEditClick = (cake: CakeType) => {
    setSelectedCake(cake);
    setFormData({
      name: cake.name,
      price: cake.price.toString(),
      image: cake.image,
      description: cake.description || ''
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateCake = () => {
    if (!selectedCake) return;

    updateCake(selectedCake.id, {
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
      description: formData.description || undefined
    });

    toast({
      title: 'Cake updated!',
      description: `${formData.name} has been updated.`,
    });

    setIsEditModalOpen(false);
    setSelectedCake(null);
    resetForm();
  };

  const handleDeleteClick = (cake: CakeType) => {
    setSelectedCake(cake);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!selectedCake) return;

    deleteCake(selectedCake.id);
    
    toast({
      title: 'Cake deleted',
      description: `${selectedCake.name} has been removed from the catalogue.`,
    });

    setIsDeleteModalOpen(false);
    setSelectedCake(null);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-cream/10">
            <h1 className="font-display text-2xl text-cream">Tentacion</h1>
            <p className="font-body text-cream/60 text-sm">Admin Panel</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-cream/10 text-cream font-body font-medium">
              <LayoutDashboard size={20} />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-cream/70 hover:bg-cream/5 font-body transition-colors">
              <Cake size={20} />
              Manage Cakes
            </button>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-cream/10 space-y-2">
            <Link
              to="/"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-cream/70 hover:bg-cream/5 font-body transition-colors"
            >
              <Home size={20} />
              View Website
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-accent hover:bg-accent/10 font-body transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Top bar */}
        <header className="bg-card border-b border-border px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h2 className="font-display text-xl text-foreground">Dashboard</h2>
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-accent hover:bg-cherry-dark text-accent-foreground font-body"
          >
            <Plus size={18} className="mr-2" />
            Add Cake
          </Button>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Cake className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-body text-muted-foreground text-sm">Total Cakes</p>
                  <p className="font-display text-3xl text-foreground">{cakes.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cake Table */}
          <div className="bg-card rounded-xl shadow-soft overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-display text-xl text-foreground">Cake Catalogue</h3>
              <p className="font-body text-muted-foreground text-sm">
                Manage your cake products
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left font-body font-semibold text-foreground text-sm">
                      Image
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-foreground text-sm">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold text-foreground text-sm">
                      Price
                    </th>
                    <th className="px-6 py-4 text-right font-body font-semibold text-foreground text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cakes.map((cake) => (
                    <tr key={cake.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <img
                          src={cake.image}
                          alt={cake.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-body font-medium text-foreground">{cake.name}</p>
                        {cake.description && (
                          <p className="font-body text-muted-foreground text-sm line-clamp-1">
                            {cake.description}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-body font-semibold text-accent">
                          ₹{cake.price.toLocaleString('en-IN')}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditClick(cake)}
                            className="font-body"
                          >
                            <Pencil size={16} className="mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteClick(cake)}
                            className="font-body"
                          >
                            <Trash2 size={16} className="mr-1" />
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {cakes.length === 0 && (
                <div className="p-12 text-center">
                  <Cake className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="font-body text-muted-foreground">
                    No cakes in the catalogue yet. Add your first cake!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Add Cake Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Add New Cake</DialogTitle>
            <DialogDescription className="font-body">
              Fill in the details to add a new cake to your catalogue.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Cake Name <span className="text-accent">*</span>
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., Chocolate Truffle Cake"
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Price (₹) <span className="text-accent">*</span>
              </label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                placeholder="e.g., 750"
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Image URL <span className="text-accent">*</span>
              </label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                placeholder="https://example.com/cake-image.jpg"
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-24 h-24 rounded-lg object-cover mt-2"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Description (Optional)
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe the cake..."
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => { setIsAddModalOpen(false); resetForm(); }}
              className="font-body"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddCake}
              className="bg-accent hover:bg-cherry-dark text-accent-foreground font-body"
            >
              Add Cake
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Cake Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Edit Cake</DialogTitle>
            <DialogDescription className="font-body">
              Update the cake details.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Cake Name <span className="text-accent">*</span>
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Price (₹) <span className="text-accent">*</span>
              </label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Image URL <span className="text-accent">*</span>
              </label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm font-medium">
                Description (Optional)
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => { setIsEditModalOpen(false); resetForm(); }}
              className="font-body"
            >
              Cancel
            </Button>
            <Button
              onClick={handleUpdateCake}
              className="bg-accent hover:bg-cherry-dark text-accent-foreground font-body"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Delete Cake</DialogTitle>
            <DialogDescription className="font-body">
              Are you sure you want to delete "{selectedCake?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
              className="font-body"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              className="font-body"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
