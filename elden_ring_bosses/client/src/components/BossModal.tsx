import { Boss } from "@/lib/bosses";
import { statusEffectsMap } from "@/lib/statusEffectsMap";
import { translateWeakness, translateResistance, translateImmunity } from "@/data/translationMap";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Flame, Shield, Zap, Sword, MapPin, Crown, Lightbulb, Wand2, Crosshair, Lock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BossModalProps {
  boss: Boss | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface BossImmunities {
  [key: string]: string[];
}

export function BossModal({ boss, open, onOpenChange }: BossModalProps) {
  if (!boss) return null;

  const statusEffects = statusEffectsMap[boss.id];

  // Mapa de imunidades para cada boss
  const bossImmunities: BossImmunities = {
    malenia: ["Morte"],
    radahn: ["Morte"],
    morgott: ["Morte"],
    maliketh: [],
    godrick: ["Morte"],
    rennala: ["Morte"],
    rykard: ["Morte"],
    mohg: ["Morte"],
    astel: ["Morte"],
    "fire-giant": ["Morte"],
    dragonlord: ["Morte"],
    "elden-beast": ["Morte"],
    "tree-sentinel": ["Morte"],
    "crucible-knight": ["Morte"],
    "godskin-apostle": ["Morte"],
    "godskin-noble": ["Morte"],
    "leonine-misbegotten": ["Morte"],
    "magma-wyrm": ["Morte"],
    "fallingstar-beast": ["Morte"],
    "bell-bearing-hunter": ["Morte"],
    "burial-tree-watchdog": ["Morte"],
    vyke: ["Morte"],
    "fell-twins": ["Morte"],
  };

  const immunities = bossImmunities[boss.id] || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-primary/30 flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display text-primary">
            {boss.name}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="space-y-6 pr-4">
            {/* Boss Image */}
            <div className="relative h-80 overflow-hidden rounded-lg border border-primary/20">
              <img
                src={boss.image}
                alt={boss.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title and Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  <span className="text-lg italic text-primary">{boss.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-lg text-accent">{boss.region}</span>
                </div>
                <Badge variant="outline" className="text-base px-3 py-1 capitalize">
                  {boss.bossType}
                </Badge>
              </div>

              {/* Difficulty */}
              <div className="flex items-center gap-3">
                <span className="stat-label">Dificuldade:</span>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < boss.difficulty
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-lg font-display text-primary">Descricao</h3>
              <p className="text-foreground/80 leading-relaxed">
                {boss.description}
              </p>
            </div>

            {/* Lore */}
            <div className="space-y-2">
              <h3 className="text-lg font-display text-primary">Lore</h3>
              <p className="text-foreground/80 leading-relaxed italic">
                {boss.lore}
              </p>
            </div>

            {/* Combat Stats - Tabs */}
            <Tabs defaultValue="weaknesses" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
                <TabsTrigger value="weaknesses" className="flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Fraquezas
                </TabsTrigger>
                <TabsTrigger value="resistances" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Resistências
                </TabsTrigger>
                <TabsTrigger value="immunities" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Imunidades
                </TabsTrigger>
              </TabsList>

              {/* Weaknesses Tab */}
              <TabsContent value="weaknesses" className="space-y-3 mt-4">
                <div className="flex flex-wrap gap-2">
                  {boss.weaknesses.length > 0 ? (
                    boss.weaknesses.map((w) => (
                      <Badge
                        key={w}
                        className="bg-accent/30 text-accent hover:bg-accent/40"
                      >
                        {translateWeakness(w)}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-foreground/60 text-sm">Nenhuma fraqueza conhecida</p>
                  )}
                </div>
              </TabsContent>

              {/* Resistances Tab */}
              <TabsContent value="resistances" className="space-y-3 mt-4">
                <div className="flex flex-wrap gap-2">
                  {boss.resistances.length > 0 ? (
                    boss.resistances.map((r) => (
                      <Badge
                        key={r}
                        className="bg-primary/30 text-primary hover:bg-primary/40"
                      >
                        {translateResistance(r)}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-foreground/60 text-sm">Nenhuma resistência conhecida</p>
                  )}
                </div>
              </TabsContent>

              {/* Immunities Tab */}
              <TabsContent value="immunities" className="space-y-3 mt-4">
                <div className="flex flex-wrap gap-2">
                  {immunities.length > 0 ? (
                    immunities.map((immunity) => (
                      <Badge
                        key={immunity}
                        className="bg-red-900/30 text-red-300 hover:bg-red-900/40"
                      >
                        {translateImmunity(immunity)}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-foreground/60 text-sm">Nenhuma imunidade conhecida</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            {/* Status Effects */}
            {statusEffects && (
              <div className="grid grid-cols-2 gap-6 border-t border-primary/20 pt-6">
                <div className="space-y-3">
                  <h4 className="stat-label text-purple-400">Vulneravel a Efeitos</h4>
                  <div className="flex flex-wrap gap-2">
                    {statusEffects.vulnerable.map((effect: string) => (
                      <Badge
                        key={effect}
                        className="bg-purple-900/30 text-purple-300 hover:bg-purple-900/40"
                      >
                        {effect}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="stat-label text-green-400">Resistente a Efeitos</h4>
                  <div className="flex flex-wrap gap-2">
                    {statusEffects.resistant.map((effect: string) => (
                      <Badge
                        key={effect}
                        className="bg-green-900/30 text-green-300 hover:bg-green-900/40"
                      >
                        {effect}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Drops */}
            <div className="space-y-3">
              <h4 className="stat-label flex items-center gap-2">
                <Sword className="w-4 h-4" />
                Drops
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {boss.drops.map((d) => (
                  <div
                    key={d}
                    className="p-3 bg-secondary rounded-lg border border-border"
                  >
                    <p className="text-sm text-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Combat Strategy */}
            {boss.strategy && (
              <div className="space-y-6 border-t border-primary/20 pt-6">
                <h3 className="text-lg font-display text-primary">Estrategia de Combate</h3>

                {/* Tips */}
                <div className="space-y-3">
                  <h4 className="stat-label flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Dicas Importantes
                  </h4>
                  <ul className="space-y-2">
                    {boss.strategy.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-foreground/80"
                      >
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Builds */}
                <div className="space-y-3">
                  <h4 className="stat-label flex items-center gap-2">
                    <Wand2 className="w-4 h-4" />
                    Builds Recomendados
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {boss.strategy.recommendedBuilds.map((build, i) => (
                      <div
                        key={i}
                        className="p-3 bg-accent/10 rounded-lg border border-accent/30"
                      >
                        <p className="text-sm text-accent">{build}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attack Patterns */}
                <div className="space-y-3">
                  <h4 className="stat-label flex items-center gap-2">
                    <Crosshair className="w-4 h-4" />
                    Padroes de Ataque
                  </h4>
                  <ul className="space-y-2">
                    {boss.strategy.attackPatterns.map((pattern, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-foreground/80"
                      >
                        <span className="text-primary font-bold flex-shrink-0">⚔</span>
                        <span>{pattern}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
