import { useState } from "react";
import { bosses } from "@/lib/bosses";
import { BossCard } from "@/components/BossCard";
import { BossModal } from "@/components/BossModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Boss } from "@/lib/bosses";
import { Crown, Zap, Filter, Search, Calculator, X } from "lucide-react";

export default function Home() {
  const [selectedBoss, setSelectedBoss] = useState<Boss | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "demigod" | "legend" | "optional">("all");
  const [sortBy, setSortBy] = useState<"difficulty" | "name">("difficulty");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWeakness, setSelectedWeakness] = useState<string | null>(null);
  const [showDamageCalc, setShowDamageCalc] = useState(false);
  const [calcWeaponType, setCalcWeaponType] = useState<string>("Corte");
  const [calcWeakness, setCalcWeakness] = useState<string>("Sangramento");
  const [calcBaseDamage, setCalcBaseDamage] = useState(100);

  // Get all unique weaknesses
  const allWeaknesses = Array.from(new Set(bosses.flatMap(b => b.weaknesses))).sort();

  const filteredBosses = bosses.filter((boss) => {
    // Filter by type
    if (filterType !== "all" && boss.bossType !== filterType) {
      return false;
    }
    
    // Filter by weakness
    if (selectedWeakness && !boss.weaknesses.includes(selectedWeakness)) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return (
        boss.name.toLowerCase().includes(query) ||
        boss.title.toLowerCase().includes(query) ||
        boss.region.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  const sortedBosses = [...filteredBosses].sort((a, b) => {
    if (sortBy === "difficulty") {
      return b.difficulty - a.difficulty;
    }
    return a.name.localeCompare(b.name);
  });

  // Calculate damage with weakness multiplier
  const calculateDamage = () => {
    const multipliers: { [key: string]: number } = {
      "Sangramento": 1.3,
      "Fogo": 1.25,
      "Raio": 1.25,
      "Magia": 1.2,
      "Congelamento": 1.2,
      "Podridão Escarlata": 1.15,
      "Sono": 1.4,
      "Loucura": 1.1,
      "Praga da Morte": 1.15,
      "Envenenamento": 1.1,
      "Sagrado": 1.15,
    };
    
    const multiplier = multipliers[calcWeakness] || 1;
    return Math.round(calcBaseDamage * multiplier);
  };

  const handleBossClick = (boss: Boss) => {
    setSelectedBoss(boss);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="container py-8">
          <div className="flex items-center gap-4 mb-6">
            <Crown className="w-8 h-8 text-primary animate-float" />
            <div>
              <h1 className="text-4xl font-display text-primary drop-shadow-lg">
                Elden Ring
              </h1>
              <p className="text-lg text-muted-foreground italic">
                Bosses Encyclopedia
              </p>
            </div>
          </div>
          <p className="text-foreground/70 max-w-2xl">
            Uma enciclopédia completa dos chefes mais formidáveis das Terras
            Intermediárias. Descubra suas fraquezas, resistências e lore.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="flex items-center gap-3 bg-card border border-primary/20 rounded-lg px-4 py-3">
            <Search className="w-5 h-5 text-primary flex-shrink-0" />
            <Input
              placeholder="Buscar por nome, título ou região..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="stat-label">Filtrar por tipo:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {(["all", "demigod", "legend", "optional"] as const).map(
                (type) => (
                  <Button
                    key={type}
                    variant={filterType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType(type)}
                    className={
                      filterType === type
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {type === "all"
                      ? "Todos"
                      : type === "demigod"
                        ? "Demigods"
                        : type === "legend"
                          ? "Lendários"
                          : "Opcionais"}
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Weakness Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="stat-label">Filtrar por fraqueza:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedWeakness === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedWeakness(null)}
                className={selectedWeakness === null ? "bg-primary text-primary-foreground" : ""}
              >
                Todas
              </Button>
              {allWeaknesses.map((weakness) => (
                <Button
                  key={weakness}
                  variant={selectedWeakness === weakness ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedWeakness(weakness)}
                  className={selectedWeakness === weakness ? "bg-primary text-primary-foreground" : ""}
                >
                  {weakness}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="stat-label">Ordenar por:</span>
            </div>
            <div className="flex gap-2">
              {(["difficulty", "name"] as const).map((sort) => (
                <Button
                  key={sort}
                  variant={sortBy === sort ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy(sort)}
                  className={
                    sortBy === sort ? "bg-primary text-primary-foreground" : ""
                  }
                >
                  {sort === "difficulty" ? "Dificuldade" : "Nome"}
                </Button>
              ))}
            </div>
          </div>

          {/* Damage Calculator Button */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Mostrando {sortedBosses.length} de {bosses.length} bosses
              {searchQuery && ` (filtrado por: "${searchQuery}")`}
              {selectedWeakness && ` | Fraqueza: ${selectedWeakness}`}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDamageCalc(!showDamageCalc)}
              className="flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              {showDamageCalc ? "Fechar Calculadora" : "Calculadora de Dano"}
            </Button>
          </div>

          {/* Damage Calculator */}
          {showDamageCalc && (
            <div className="bg-card border border-primary/20 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary">Calculadora de Dano</h3>
                <button
                  onClick={() => setShowDamageCalc(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de Arma:</label>
                  <select
                    value={calcWeaponType}
                    onChange={(e) => setCalcWeaponType(e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg text-foreground"
                  >
                    <option>Corte</option>
                    <option>Perfuração</option>
                    <option>Impacto</option>
                    <option>Normal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Fraqueza do Boss:</label>
                  <select
                    value={calcWeakness}
                    onChange={(e) => setCalcWeakness(e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg text-foreground"
                  >
                    {allWeaknesses.map((weakness) => (
                      <option key={weakness} value={weakness}>
                        {weakness}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Dano Base:</label>
                  <input
                    type="number"
                    value={calcBaseDamage}
                    onChange={(e) => setCalcBaseDamage(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Dano com Fraqueza:</label>
                  <div className="px-3 py-2 bg-background border border-primary/20 rounded-lg text-foreground font-semibold text-lg text-accent">
                    {calculateDamage()} dano
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Ornamental Divider */}
        <div className="ornamental-divider mb-12" />

        {/* Boss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBosses.map((boss) => (
            <BossCard
              key={boss.id}
              boss={boss}
              onClick={() => handleBossClick(boss)}
            />
          ))}
        </div>

        {sortedBosses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {searchQuery
                ? `Nenhum boss encontrado com "${searchQuery}".`
                : "Nenhum boss encontrado com os filtros selecionados."}
            </p>
          </div>
        )}
      </main>

      {/* Boss Modal */}
      <BossModal
        boss={selectedBoss}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />

      {/* Footer */}
      <footer className="border-t border-primary/20 mt-20">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>
            Elden Ring Bosses Encyclopedia © 2024 | Todos os direitos
            reservados
          </p>
          <p className="mt-2">
            Desenvolvido com dedicação para os Tarnished
          </p>
        </div>
      </footer>
    </div>
  );
}
